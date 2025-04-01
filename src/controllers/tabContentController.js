import { getAllTabContent, updateTabContent, createTabContent } from "../services/tabContentService.js";

// GET
export const getAllTabContentController = async (req, res) => {
    try {
        const tabContents = await getAllTabContent()
        res.status(200).json(tabContents);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// UPDATE
export const updateTabContentController = async (req, res) => {
    try {
        const tabContent = await updateTabContent(req.body)
        res.status(200).json(tabContent);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// CREATE
export const createTabContentController = async (req, res) => {
    try {
        const tabContent = await createTabContent(req.body);
        res.status(200).json(tabContent);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}