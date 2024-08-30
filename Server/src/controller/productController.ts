import {Request,Response} from 'express'
import { addProduct, Product, updateProduct,deleteProduct } from '../models/product'


export const createProduct = async (req:Request,res:Response)=>{
    const {name,categoryId,subCategoryId,status,image} = req.body

    try{
        const newProduct :Product ={name,categoryId,subCategoryId,status,image}
        const product = await addProduct(newProduct)
        res.status(201).json(product)
    }catch(error){
        console.error(error as Error)
        res.status(500).json({error:'Server error'})
    }
}

export const editProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, categoryId, subCategoryId, status, image } = req.body;

    try {
        const updatedProduct = await updateProduct(Number(id), { name, categoryId, subCategoryId, status, image });
        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

export const removeProduct = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedProduct = await deleteProduct(Number(id));
        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
