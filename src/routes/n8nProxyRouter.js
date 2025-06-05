// src/routes/n8nProxyRouter.js
import express from 'express';
import axios from 'axios';

const router = express.Router();

router.all('/*', async (req, res) => {
    try {
      const targetUrl = `${process.env.N8N_HOST}${req.originalUrl.replace('/api/n8n-proxy', '')}`;
      console.log('Proxying to:', targetUrl, 'method:', req.method);
      const n8nRes = await axios({
        method: req.method,
        url: targetUrl,
        data: req.body,
        params: req.query,
        headers: { ...req.headers, host: undefined },
      });
      res.status(n8nRes.status).send(n8nRes.data);
    } catch (err) {
      console.error('Proxy error:', err.response?.data || err.message);
      res.status(err.response?.status || 500).send(err.response?.data || err.message);
    }
  });

export default router;