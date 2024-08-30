import express from 'express'
import { createProduct,editProduct,removeProduct } from '../controller/productController'
import { adminAuth } from '../middleware/adminAuth'

const router =express.Router()

router.post('/products',adminAuth,createProduct)
router.put('/products/:id',adminAuth,editProduct)
router.delete('/products/:id',adminAuth,removeProduct)

export default router