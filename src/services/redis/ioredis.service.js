import Redis from 'ioredis';
import { config } from 'dotenv';
config();

const REDIS_CONFIG = {
  host: '127.0.0.1',
  port: 6379,
  password: undefined,
  retryStrategy: (times) => Math.min(times * 50, 2000),
  maxRetriesPerRequest: 10,
  lazyConnect: true,
  enableReadyCheck: true,
  maxRetriesPerRequest: null,
  retryDelayOnFailover: 100,
  enableOfflineQueue: false,
  connectTimeout: 10000,
  commandTimeout: 5000,
  keepAlive: 30000,
};

const isProduction = process.env.NODE_ENV === 'production';

const log = (message, level = 'info') => {
  if (!isProduction) {
    console[level](message);
  }
};

class RedisService {
  constructor() {
    this.redis = new Redis(REDIS_CONFIG);
    this.initializeEventListeners();
    this.isConnected = false;
  }

  initializeEventListeners() {
    this.redis.on('connect', () => {
      log('✅ Redis connected');
      this.isConnected = true;
    });
    this.redis.on('ready', () => {
      log('🚀 Redis ready to use');
      this.isConnected = true;
    });
    this.redis.on('error', (err) => {
      log(`❌ Redis Error: ${err.message}`, 'error');
      this.isConnected = false;
    });
    this.redis.on('end', () => {
      log('🔴 Redis disconnected');
      this.isConnected = false;
    });
    this.redis.on('reconnecting', (time) => {
      log(`🔄 Redis reconnecting... Attempt ${time}`);
    });
    this.redis.on('close', () => {
      log('🔒 Redis connection closed');
      this.isConnected = false;
    });
  }

  async ensureConnection() {
    try {
      if (this.redis.status !== 'ready') {
        await this.redis.connect();
      }
      this.isConnected = true;
    } catch (error) {
      log(`Redis connection error: ${error.message}`, 'error');
      this.isConnected = false;
      throw error;
    }
  }

  async get(key) {
    try {
      if (!this.isConnected) {
        await this.ensureConnection();
      }
      const data = await this.redis.get(key);
      if (data) {
        log(`✅ CACHE HIT: ${key}`);
        return JSON.parse(data);
      }
      log(`❌ CACHE MISS: ${key}`);
      return null;
    } catch (error) {
      log(`Redis Get Error: ${error.message}`, 'error');
      this.isConnected = false;
      return null;
    }
  }

  async set(key, value, expireTime = 3600) {
    try {
      if (!this.isConnected) {
        await this.ensureConnection();
      }
      await this.redis.set(key, JSON.stringify(value), 'EX', expireTime);
      log(`✅ SET ${key} -> Expires in ${expireTime}s`);
      return true;
    } catch (error) {
      log(`Redis Set Error: ${error.message}`, 'error');
      this.isConnected = false;
      return false;
    }
  }

  async del(key) {
    try {
      if (!this.isConnected) {
        await this.ensureConnection();
      }
      await this.redis.del(key);
      log(`🗑️ DELETE ${key}`);
      return true;
    } catch (error) {
      log(`Redis Delete Error: ${error.message}`, 'error');
      this.isConnected = false;
      return false;
    }
  }

  getStatus() {
    return this.redis.status;
  }

  isRedisConnected() {
    return this.isConnected && this.redis.status === 'ready';
  }

  async disconnect() {
    try {
      await this.redis.quit();
      this.isConnected = false;
    } catch (error) {
      log(`Redis disconnect error: ${error.message}`, 'error');
    }
  }
}

export default new RedisService();