import express from 'express';
import { createCategory, editCategory, removeCategory } from '../controller/categoryController';
import { adminAuth } from '../middleware/adminAuth';

const router = express.Router();

router.post('/categories', adminAuth, createCategory);
router.put('/categories/:id', adminAuth, editCategory);
router.delete('/categories/:id', adminAuth, removeCategory);

export default router;
