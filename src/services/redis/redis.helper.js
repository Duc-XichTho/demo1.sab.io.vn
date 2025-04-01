import { redisClient } from './redis.service.js';

const subClient = redisClient.duplicate();
const pubClient = redisClient;
const cacheHandlers = {};

subClient.on('error', (err) => console.error('Redis SubClient Error', err));
subClient.on('connect', () => console.log('SubClient connected to Redis'));

export const getFromCache = async (key, ttl, fetchFromDb) => {
  try {
    const cachedData = await redisClient.get(key);
    if (cachedData) {
      try {
        return JSON.parse(cachedData);
      } catch (e) {
        console.warn(`Invalid JSON in cache for key ${key}`);
      }
    }
  } catch (error) {
    console.warn(`Redis error for key ${key}:`, error.message);
  }
  const data = await fetchFromDb();
  await setCache(key, ttl, data);
  return data;
};

export const deleteFromCache = async (prefix, ids) => {
  if (!ids || !Array.isArray(ids)) {
    throw new Error('Invalid IDs array for deletion');
  }
  try {
    const keys = ids.map((id) => `${prefix}:${id}`);
    await redisClient.del(keys);
  } catch (error) {
    throw new Error(`Failed to delete from cache: ${error.message}`);
  }
};

export const invalidateListCache = async (listKey) => {
  try {
    await redisClient.del(listKey);
  } catch (error) {
    throw new Error(`Failed to invalidate list cache ${listKey}: ${error.message}`);
  }
};

export const setCache = async (key, ttl, data) => {
  if (!key || ttl == null || data == null) {
    throw new Error('Invalid parameters for setCache');
  }
  try {
    await redisClient.setEx(key, ttl, JSON.stringify(data));
  } catch (error) {
    throw new Error(`Failed to set cache for key ${key}: ${error.message}`);
  }
};

export const publishChange = async (channel, message) => {
  try {
    await pubClient.publish(channel, JSON.stringify(message));
  } catch (error) {
    throw new Error(`Failed to publish to channel ${channel}: ${error.message}`);
  }
};

export const subscribeToChanges = (channel, handler) => {
  subClient.subscribe(channel, (message) => {
    try {
      const parsedMessage = JSON.parse(message);
      handler(parsedMessage);
    } catch (error) {
      console.warn(`Failed to process message on channel ${channel}:`, error.message);
    }
  });
};

export const registerCacheHandler = (prefix, ttlConfig, customHandler = null) => {
  if (!prefix || !ttlConfig) {
    throw new Error('Invalid parameters for registerCacheHandler');
  }
  const channel = `${prefix}:changes`;
  const handler = async (message) => {
    const { action, id, ids, data } = message;

    switch (action) {
      case 'create':
      case 'update':
        if (id && data) {
          await setCache(`${prefix}:id:${id}`, ttlConfig.single, data);
          await invalidateListCache(`${prefix}:all`);
          await invalidateListCache(`${prefix}:count`);
          await invalidateListCache(`${prefix}:lastUpdate`);
          await invalidateListCache(`${prefix}:lastId`);
        }
        break;
      case 'delete':
        if (ids) {
          await deleteFromCache(prefix, ids);
          await invalidateListCache(`${prefix}:all`);
          await invalidateListCache(`${prefix}:count`);
          await invalidateListCache(`${prefix}:lastUpdate`);
          await invalidateListCache(`${prefix}:lastId`);
        }
        break;
      case 'custom':
        if (customHandler) await customHandler(message);
        break;
      default:
        console.warn(`Unknown action: ${action}`);
    }
  };

  cacheHandlers[prefix] = { channel, handler };
  subscribeToChanges(channel, handler);
};

export const initializeCacheManager = async () => {
  try {
    await subClient.connect();
    console.log('Cache manager initialized with Pub/Sub');
  } catch (error) {
    throw new Error(`Failed to initialize cache manager: ${error.message}`);
  }
};
