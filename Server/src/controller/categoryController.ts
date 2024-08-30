import { Request, Response } from 'express';
import { addCategory, updateCategory, deleteCategory, Category } from '../models/category';

export const createCategory = async (req: Request, res: Response) => {
    const { name, sequence, status, image } = req.body;

    try {
        console.log('crate category',name);
        const newCategory: Category = await addCategory({ name, sequence, status, image });
        res.status(201).json(newCategory);
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

export const editCategory = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, sequence, status, image } = req.body;

    try {
        const updatedCategory = await updateCategory(Number(id), { name, sequence, status, image });
        if (!updatedCategory) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(200).json(updatedCategory);
    } catch (error) {
        console.error('Error updating category:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

export const removeCategory = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedCategory = await deleteCategory(Number(id));
        if (!deletedCategory) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
