import pool from "../config/dbConfig";

export interface Product{
    id?:number;
    name:string;
    categoryId:number;
    subCategoryId:number;
    status:string;
    image:string;
}

//add a new product
export const addProduct = async(product:Product)=>{
    const query =`INSERT INTO products (name, category_id,sub_category_id, status, image)
                  VALUES ($1, $2, $3 , $4 , $5) RETURNING *;`
    const values = [product.name,product.categoryId,product.subCategoryId,product.status,product.image]
    const result = await pool.query(query, values)    
    console.log('prodt',result);        
    return result.rows[0]  
}

//update an existing product
export const updateProduct = async(id:number,product:Partial<Product>)=>{
    const query =`UPDATE products 
                  SET name=$1, category_id=$2, sub_category_id =$3, status=$4 ,image=$5
                  WHERE id=$6 RETURNING *;`

    const values =  [product.name, product.categoryId, product.subCategoryId, product.status, product.image, id];              
    const result = await pool.query(query, values)
    console.log(result,'updtd prdt');
    return result.rows[0]
}

//delete a product
export const deleteProduct = async(id:number)=>{
    const query =  `DELETE FROM products WHERE id = $1 RETURNING *;`
    const values = [id]
    const result =await pool.query(query,values)
    return result.rows[0]
}