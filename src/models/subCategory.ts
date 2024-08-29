import pool from '../config/dbConfig';

export interface SubCategory {
    id?: number;
    name: string;
    category_id: number;
    sequence: number;
    status: boolean;
    image?: string;
}

// Add a new sub-category
export const addSubCategory = async (subCategory: SubCategory) => {
    const { name, category_id, sequence, status, image } = subCategory;
    const result = await pool.query(
        'INSERT INTO sub_category (name, category_id, sequence, status, image) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [name, category_id, sequence, status, image]
    );
    return result.rows[0];
};

// Edit an existing sub-category
export const editSubCategory = async (id: number, subCategory: Partial<SubCategory>) => {
    const { name, category_id, sequence, status, image } = subCategory;
    const result = await pool.query(
        `UPDATE sub_category SET 
            name = COALESCE($1, name), 
            category_id = COALESCE($2, category_id), 
            sequence = COALESCE($3, sequence), 
            status = COALESCE($4, status), 
            image = COALESCE($5, image)
         WHERE id = $6 RETURNING *`,
        [name, category_id, sequence, status, image, id]
    );
    return result.rows[0];
};

// Delete a sub-category
export const deleteSubCategory = async (id: number) => {
    await pool.query('DELETE FROM sub_category WHERE id = $1', [id]);
};
