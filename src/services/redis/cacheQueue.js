import { redisClient } from "./redis.service.js";

class CacheQueue {
  constructor() {
    this.queue = [];
    this.timer = null;
    this.batchSize = 5000;
    this.flushInterval = 300;
    this.maxParallelFlushes = 10;
    this.currentFlushes = 0;
    this.totalFlushes = 0;
  }

  // Read operation - direct from Redis
  async get(key) {
    try {
      const data = await redisClient.get(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error reading from Redis:', error);
      return null;
    }
  }

  // Create/Update operation - queued
  set(key, value, options = { EX: 3600 }) {
    this.enqueue('set', key, value, options);
  }

  // Delete operation - queued
  delete(key) {
    this.enqueue('del', key);
  }

  // Bulk operations
  async mget(keys) {
    try {
      const values = await redisClient.mGet(keys);
      return values.map(value => value ? JSON.parse(value) : null);
    } catch (error) {
      console.error('Error bulk reading from Redis:', error);
      return keys.map(() => null);
    }
  }

  mset(keyValuePairs) {
    for (const [key, value] of Object.entries(keyValuePairs)) {
      this.set(key, value);
    }
  }

  mdelete(keys) {
    for (const key of keys) {
      this.delete(key);
    }
  }

  enqueue(action, key, value = null, options = null) {
    this.queue.push({ action, key, value, options });

    if (this.queue.length >= this.batchSize) {
      this._tryFlush();
    } else if (!this.timer) {
      this.timer = setTimeout(() => this._tryFlush(), this.flushInterval);
    }
  }

  async _tryFlush() {
    if (this.currentFlushes >= this.maxParallelFlushes) {
      return;
    }
    if (this.queue.length === 0) {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      return;
    }
    this.flush();
  }

  async flush() {
    if (this.queue.length === 0) return;

    this.currentFlushes++;
    this.totalFlushes++;

    const itemsToFlush = this.queue.splice(0, this.batchSize);

    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    const pipeline = redisClient.multi();

    for (const item of itemsToFlush) {
      if (item.action === 'set') {
        pipeline.set(item.key, JSON.stringify(item.value), item.options || { EX: 3600 });
      } else if (item.action === 'del') {
        pipeline.del(item.key);
      }
    }

    const startTime = Date.now();

    try {
      await pipeline.exec();
      const duration = Date.now() - startTime;

      if (duration < 100 && this.batchSize < 20000) {
        this.batchSize += 1000;
      } else if (duration > 500 && this.batchSize > 1000) {
        this.batchSize = Math.max(1000, this.batchSize - 1000);
      }

    } catch (err) {
      console.error('❌ Error flushing cache queue', err);
    } finally {
      this.currentFlushes--;
      if (this.queue.length > 0) {
        this._tryFlush();
      }
    }
  }
}

export const cacheQueue = new CacheQueue();