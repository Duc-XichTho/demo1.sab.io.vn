import { createClient } from 'redis';

const redisClient = createClient({
  url: 'redis://127.0.0.1:6379',
});

let isConnected = false;

redisClient.on('connect', () => {
  isConnected = true;
  console.log('Connected to Redis');
});

redisClient.on('error', (err) => {
  isConnected = false;
  console.error('Redis Client Error', err);
  throw new Error(`Redis connection failed: ${err.message}`);
});

const connectRedis = async () => {
  if (!isConnected) {
    try {
      await redisClient.connect();
    } catch (error) {
      throw new Error(`Failed to connect to Redis: ${error.message}`);
    }
  }
};

export { redisClient, connectRedis };