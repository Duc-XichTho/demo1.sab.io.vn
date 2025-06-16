import {
    deleteEmbedDataFile,
    embedDataFile,
    processQuestion,
    processQuestionWithSources, processQuestionWithSourcesOne
} from "../../services/serviceApi/serviceApi.js";

export const askQuestion = async (req, res) => {
    try {
        const {question, email, timeAsk} = req.body;

        if (!question) {
            return res.status(400).json({
                success: false,
                message: 'Question is required',
                error: 'MISSING_QUESTION'
            });
        }

        const result = await processQuestion(question, email, timeAsk);

        return res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        console.error('Error in processQuestion:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

export const askQuestionSourceIDDataFile = async (req, res) => {
    try {
        const {question, email, timeAsk, sourceIds} = req.body;

        if (!question) {
            return res.status(400).json({
                success: false,
                message: 'Question is required',
                error: 'MISSING_QUESTION'
            });
        }

        const result = await processQuestionWithSources(question, email, timeAsk, sourceIds);

        return res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        console.error('Error in processQuestion:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};


export const askQuestionSourceIDDataFileOne = async (req, res) => {
    try {
        const {
            question, email, timeAsk, sourceIds, systemMessage, template,
        } = req.body;

        if (!question) {
            return res.status(400).json({
                success: false,
                message: 'Question is required',
                error: 'MISSING_QUESTION'
            });
        }

        const result = await processQuestionWithSourcesOne(question, email, timeAsk, sourceIds, systemMessage, template,
        );

        return res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        console.error('Error in processQuestion:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

export const embedData = async (req, res) => {
    try {
        const ids = req.body;
        if (ids.length < 0) {
            return res.status(400).json({
                success: false,
                message: 'Question is required',
                error: 'MISSING_QUESTION'
            });
        }

        const result = await embedDataFile(ids);

        return res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        console.error('Error in processQuestion:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

export const deleteEmbedData = async (req, res) => {
    try {
        const value = req.body;
        if (value.length < 0) {
            return res.status(400).json({
                success: false,
                message: 'DataFile is required',
                error: 'DataFile < 0'
            });
        }

        const result = await deleteEmbedDataFile(value);

        return res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};