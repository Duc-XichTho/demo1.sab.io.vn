import { sendTTSRequest } from "../services/audioPlayService.js";

export const handleSpeak = async (req, res) => {
    const data = req.body;
    try {
        const result = await sendTTSRequest(data);
        if (result) {
            res.status(200).json({ message: 'SUCCESS', audioUrl: result });
        } else {
            res.status(400).json({ message: 'NOT_FOUND' });
        }
    } catch (error) {
        res.status(500).json({ message: 'ERR', error: error.message });
    }
};

export const handleCallback = (req, res) => {
    const { status, audio_link } = req.body;
    if (status === 'SUCCESS') {
        console.log('Xử lý thành công:', audio_link);
        res.status(200).json({ message: 'Xử lý thành công', audioUrl: audio_link });
    } else {
        console.error('Xử lý thất bại hoặc gặp lỗi.');
        res.status(400).json({ message: 'Xử lý thất bại hoặc gặp lỗi.' });
    }
};
