import express from 'express';
import { addSubCategoryHandler, editSubCategoryHandler, deleteSubCategoryHandler } from '../controller/subCategoryController';
import { adminAuth } from '../middleware/adminAuth';

const router = express.Router();

router.post('/add', adminAuth, addSubCategoryHandler);
router.put('/edit/:id', adminAuth, editSubCategoryHandler);
router.delete('/delete/:id', adminAuth, deleteSubCategoryHandler);

export default router;
