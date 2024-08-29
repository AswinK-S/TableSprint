import { Request, Response } from 'express';
import { addSubCategory, editSubCategory, deleteSubCategory, SubCategory } from '../models/subCategory';

export const addSubCategoryHandler = async (req: Request, res: Response) => {
    try {
        const newSubCategory: SubCategory = req.body;
        const subCategory = await addSubCategory(newSubCategory);
        res.status(201).json(subCategory);
    } catch (error) {
        console.error('Error adding sub-category:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

export const editSubCategoryHandler = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const subCategoryData: Partial<SubCategory> = req.body;
        const updatedSubCategory = await editSubCategory(id, subCategoryData);
        if (!updatedSubCategory) {
            return res.status(404).json({ error: 'Sub-category not found' });
        }
        res.status(200).json(updatedSubCategory);
    } catch (error) {
        console.error('Error editing sub-category:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

export const deleteSubCategoryHandler = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        await deleteSubCategory(id);
        res.status(200).json({ message: 'Sub-category deleted successfully' });
    } catch (error) {
        console.error('Error deleting sub-category:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
