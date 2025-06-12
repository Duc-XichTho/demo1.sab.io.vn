import axios from 'axios';
import dotenv from 'dotenv';
import {ExternalChatHistory} from "../../postgres/postgres.js";
dotenv.config();

export async function processQuestion(question, email, timeAsk) {
    try {
        const response = await axios.post(
            `${process.env.DPAS_SERVICE_BASE_URL}/services/qa/ask`,
            {
                question,
                email,
                timeAsk
            },
            {
                headers: {
                    'x-api-secret': process.env.INTERNAL_API_SECRET
                }
            }
        );
        const success = response.data?.success ;
        if (success){
            await ExternalChatHistory.create(response.data.data);
        }

        // Trả về kết quả từ service A (nếu cần)
        return response.data;
    } catch (error) {
        console.error('Error calling /qa/ask from service A:', error.response?.data || error.message);
        throw new Error('Failed to process question with service A');
    }
}

export async function processQuestionWithSources(question, email, timeAsk , sourceIds) {
    try {
        const response = await axios.post(
            `${process.env.DPAS_SERVICE_BASE_URL}/services/ask-with-sources`,
            {
                question,
                email,
                timeAsk,
                sourceIds
            },
            {
                headers: {
                    'x-api-secret': process.env.INTERNAL_API_SECRET
                }
            }
        );
        const success = response.data?.success ;
        if (success){
            await ExternalChatHistory.create(response.data.data);
        }

        // Trả về kết quả từ service A (nếu cần)
        return response.data;
    } catch (error) {
        console.error('Error calling /qa/ask from service A:', error.response?.data || error.message);
        throw new Error('Failed to process question with service A');
    }
}


export async function embedDataFile(data) {
    try {
        const response = await axios.post(
            `${process.env.DPAS_SERVICE_BASE_URL}/services/embed`,
                data,
            {
                headers: {
                    'x-api-secret': process.env.INTERNAL_API_SECRET
                }
            }
        );
        // Trả về kết quả từ service A (nếu cần)
        return response.data;
    } catch (error) {
        console.error('Error calling /embed from service A:', error.response?.data || error.message);
        throw new Error('Failed to process question with service A');
    }
}
