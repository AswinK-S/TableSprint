import pool from '../config/dbConfig';

export interface Category {
    id?: number;
    name: string;
    sequence: number;
    status: boolean;
    image?: string;
}

// Add a new category
export const addCategory = async (category: Category) => {
    const query = `
        INSERT INTO category (name, sequence, status, image)
        VALUES ($1, $2, $3, $4) RETURNING *;
    `;
    const values = [category.name, category.sequence, category.status, category.image];
    const result = await pool.query(query, values);
    return result.rows[0];
};

// Update an existing category
export const updateCategory = async (id: number, category: Category) => {
    const query = `
        UPDATE category 
        SET name = $1, sequence = $2, status = $3, image = $4
        WHERE id = $5 RETURNING *;
    `;
    const values = [category.name, category.sequence, category.status, category.image, id];
    const result = await pool.query(query, values);
    return result.rows[0];
};

// Delete a category
export const deleteCategory = async (id: number) => {
    const query = `DELETE FROM category WHERE id = $1 RETURNING *;`;
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
};
