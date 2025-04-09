import { redisClient } from "./redis.service.js";

let pendingKeysToDel = new Set();
let pendingKeysToSet = new Map();
let isBatchScheduled = false;

const scheduleBatch = () => {
  if (!isBatchScheduled) {
    isBatchScheduled = true;
    setTimeout(executeBatch, 50);
  }
};

const executeBatch = async () => {
  if (pendingKeysToDel.size === 0 && pendingKeysToSet.size === 0) {
    isBatchScheduled = false;
    return;
  }

  const pipeline = redisClient.multi();

  pendingKeysToDel.forEach((key) => {
    pipeline.del(key);
  });

  pendingKeysToSet.forEach((value, key) => {
    pipeline.set(key, JSON.stringify(value), { EX: 3600 });
  });

  pendingKeysToDel.clear();
  pendingKeysToSet.clear();
  isBatchScheduled = false;

  try {
    await pipeline.exec();
  } catch (error) {
    console.error('Error executing batch cache update', error.message);
  }
};

export const batchDelCache = (key) => {
  pendingKeysToDel.add(key);
  scheduleBatch();
};

export const batchSetCache = (key, value) => {
  pendingKeysToSet.set(key, value);
  scheduleBatch();
};
