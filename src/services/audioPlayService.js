import axios from "axios";

const TTS_API_TOKEN = process.env.TTS_API_TOKEN;
const APP_ID = process.env.APP_ID;
const CALLBACK_URL = process.env.CALLBACK_URL;

// Hàm gửi yêu cầu TTS
export const sendTTSRequest = async (data) => {
    const text = data.htmlText;
    try {
        const response = await axios({
            method: 'POST',
            url: 'https://vbee.vn/api/v1/tts',
            data: {
                voice_code: 'hn_male_manhdung_news_48k-phg',
                speed_rate: '1',
                input_text: text,
                app_id: APP_ID,
                callback_url: CALLBACK_URL
            },
            headers: { Authorization: `Bearer ${TTS_API_TOKEN}` },
            timeout: 120000,
        });

        // Nếu trạng thái là IN_PROGRESS, kiểm tra trạng thái âm thanh
        if (response.data.result.status === 'IN_PROGRESS') {
            const audioUrl = await checkAudioStatus(response.data.result.request_id);
            return audioUrl;
        }

        return response.data.result.audio_link;
    } catch (error) {
        console.error('Lỗi khi gửi yêu cầu TTS:', error.message);
        throw error;
    }
};

export const checkAudioStatus = async (requestId) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `https://vbee.vn/api/v1/tts/${requestId}`,
            headers: { Authorization: `Bearer ${TTS_API_TOKEN}` },
            timeout: 120000,
        });

        const result = response.data.result;

        if (result.status === 'SUCCESS') {
            return result.audio_link;
        } else if (result.status === 'IN_PROGRESS') {
            await new Promise(resolve => setTimeout(resolve, 1000));
            return checkAudioStatus(requestId);
        } else {
            console.error('Xử lý thất bại hoặc gặp lỗi:', result);
            return null;
        }
    } catch (error) {
        console.error('Lỗi khi kiểm tra trạng thái âm thanh:', error.message);
        throw error;
    }
};
