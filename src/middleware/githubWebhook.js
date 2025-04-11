import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);
const repoPath = '/root/app/fastco.sab.io.vn_be';
const repoName = "fastco.sab.io.vn_be";

const updateCode = async () => {
  try {
    await execPromise(`cd ${repoPath} && chmod +x deploy.sh && ./deploy.sh`);
    return true;
  } catch (error) {
    console.error(`Lỗi khi thực thi lệnh: ${error}`);
    return false;
  }
};

const processCommits = (commits) => {
  if (!commits || commits.length === 0) return false;

  let shouldUpdateCode = false;

  for (const commit of commits) {
    const { added, removed, modified } = commit;
    if (added.length > 0 || modified.length > 0 || removed.length > 0) {
      shouldUpdateCode = true;
    }
  }

  return shouldUpdateCode;
};

const githubWebhook = async (req, res, next) => {
  try {
    const payload = req.body;

    if (payload.ref !== 'refs/heads/master') {
      return res.status(200).send('Không phải là đẩy lên nhánh master');
    }

    const shouldUpdateCode = processCommits(payload.commits);

    if (shouldUpdateCode) {
      const success = await updateCode();
      if (success) {
        return res.status(200).send(`${repoName} đã được cập nhật thành công`);
      } else {
        return res.status(500).send(`Cập nhật ${repoName} không thành công`);
      }
    } else {
      return res.status(200).send(`Không có thay đổi nào trong kho lưu trữ ${repoName}`);
    }
  } catch (error) {
    console.error('Lỗi xử lý webhook:', error);
    return res.status(500).send('Lỗi máy chủ nội bộ');
  }
};

export default githubWebhook;