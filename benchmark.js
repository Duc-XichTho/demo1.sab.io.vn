import { cacheQueue } from "./src/services/redis/cacheQueue.js";
import { redisClient } from "./src/services/redis/redis.service.js";

async function runBenchmark() {
  // Thêm đo lường bộ nhớ
  const memoryBefore = process.memoryUsage();
  
  const totalRequests = 1000000;
  console.log(`🚀 Sending ${totalRequests} requests...`);
  const startTime = Date.now();

  // Thêm theo dõi tiến trình
  let lastReportedProgress = 0;
  const progressInterval = Math.floor(totalRequests / 10); // Báo cáo 10 lần

  for (let i = 0; i < totalRequests; i++) {
    cacheQueue.enqueue('set', `key_${i}`, { value: i });
    
    // Báo cáo tiến trình
    if (i % progressInterval === 0 && i > lastReportedProgress) {
      const progress = Math.floor((i / totalRequests) * 100);
      console.log(`⏳ Đã xử lý ${i} requests (${progress}%)...`);
      lastReportedProgress = i;
    }
  }

  console.log(`⏳ Đã enqueue tất cả requests, đang đợi flush hoàn tất...`);
  
  // Đợi flush xong với timeout
  const maxWaitTime = 5 * 60 * 1000; // 5 phút
  const waitStartTime = Date.now();
  
  while ((cacheQueue.queue.length > 0 || cacheQueue.currentFlushes > 0) && 
         (Date.now() - waitStartTime < maxWaitTime)) {
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Báo cáo tiến độ flush
    if (Date.now() % 500 < 100) {
      console.log(`⏳ Còn ${cacheQueue.queue.length} items trong queue, ${cacheQueue.currentFlushes} flushes đang chạy...`);
    }
  }

  const totalTime = (Date.now() - startTime) / 1000;
  console.log(`✅ Benchmark hoàn thành!`);
  console.log(`🔢 Tổng requests: ${totalRequests}`);
  console.log(`🛠️  Tổng flush thực hiện: ${cacheQueue.totalFlushes}`);
  console.log(`⏱️  Tổng thời gian: ${totalTime.toFixed(2)} giây`);
  console.log(`🚀 Hiệu suất trung bình: ${(totalRequests / totalTime).toFixed(2)} requests/giây`);
  
  // Thêm thông tin về bộ nhớ
  const memoryAfter = process.memoryUsage();
  console.log(`📊 Thông tin bộ nhớ:`);
  console.log(`   - RSS trước: ${formatBytes(memoryBefore.rss)}, sau: ${formatBytes(memoryAfter.rss)}`);
  console.log(`   - Heap trước: ${formatBytes(memoryBefore.heapUsed)}, sau: ${formatBytes(memoryAfter.heapUsed)}`);
  console.log(`   - Tăng heap: ${formatBytes(memoryAfter.heapUsed - memoryBefore.heapUsed)}`);
  
  // Kiểm tra và báo cáo các items còn lại trong queue (nếu có)
  if (cacheQueue.queue.length > 0) {
    console.warn(`⚠️ Có ${cacheQueue.queue.length} items chưa được xử lý trong queue!`);
  }
}

// Hàm hỗ trợ để format kích thước bộ nhớ
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

async function main() {
  try {
    console.log("⏳ Kết nối Redis...");
    if (!redisClient.isOpen) {
      await redisClient.connect();
    }

    console.log("⏳ Xóa dữ liệu cũ (nếu có)...");
    // Xóa dữ liệu benchmark cũ (tùy chọn)
    await redisClient.flushDb();
    
    console.log("⏳ Bắt đầu benchmark...");
    await runBenchmark();
  } catch (error) {
    console.error("❌ Lỗi trong quá trình benchmark:", error);
  } finally {
    console.log("⏳ Đóng kết nối Redis...");
    await redisClient.quit();
  }
}

main();