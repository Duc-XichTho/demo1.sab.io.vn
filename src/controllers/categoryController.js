import {
    getAllCategory,
    createCategory,
    updateCategory
} from "../services/categoryService.js";

// GET
export const getAllCategoryController = async (req, res) => {
    try {
        const categorys = await getAllCategory()
        res.status(200).json(categorys);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// UPDATE
export const updateCategoryController = async (req, res) => {
    try {
        const category = await updateCategory(req.body);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// CREATE 
export const createCategoryController = async (req, res) => {
    try {
        const category = await createCategory(req.body);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}