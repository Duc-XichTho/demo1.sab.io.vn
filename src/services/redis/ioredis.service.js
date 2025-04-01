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
  }

  initializeEventListeners() {
    this.redis.on('connect', () => log('✅ Redis connected'));
    this.redis.on('ready', () => log('🚀 Redis ready to use'));
    this.redis.on('error', (err) => log(`❌ Redis Error: ${err.message}`, 'error'));
    this.redis.on('end', () => log('🔴 Redis disconnected'));
    this.redis.on('reconnecting', (time) => log(`🔄 Redis reconnecting... Attempt ${time}`));
  }

  async ensureConnection() {
    if (this.redis.status !== 'ready') {
      await this.redis.connect();
    }
  }

  async get(key) {
    try {
      await this.ensureConnection();
      const data = await this.redis.get(key);
      if (data) {
        log(`✅ CACHE HIT: ${key}`);
        return JSON.parse(data);
      }
      log(`❌ CACHE MISS: ${key}`);
      return null;
    } catch (error) {
      log(`Redis Get Error: ${error.message}`, 'error');
      return null;
    }
  }

  async set(key, value, expireTime = 3600) {
    try {
      await this.ensureConnection();
      await this.redis.set(key, JSON.stringify(value), 'EX', expireTime);
      log(`✅ SET ${key} -> Expires in ${expireTime}s`);
      return true;
    } catch (error) {
      log(`Redis Set Error: ${error.message}`, 'error');
      return false;
    }
  }

  async del(key) {
    try {
      await this.ensureConnection();
      await this.redis.del(key);
      log(`🗑️ DELETE ${key}`);
      return true;
    } catch (error) {
      log(`Redis Delete Error: ${error.message}`, 'error');
      return false;
    }
  }

  getStatus() {
    return this.redis.status;
  }

  async disconnect() {
    await this.redis.quit();
  }
}

export default new RedisService();