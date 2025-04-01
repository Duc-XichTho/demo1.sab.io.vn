import { searchRecordsByKey } from "../services/searchService.js";

export const handleSearch = async (req, res) => {
    const { modelType, conditions } = req.body;
    try {
        if (typeof conditions !== 'object' || Array.isArray(conditions)) {
            return res.status(400).json({ error: "Conditions must be an object" });
        }
        const data = await searchRecordsByKey(modelType, conditions);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
