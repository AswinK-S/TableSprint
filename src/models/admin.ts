import pool from "../config/dbConfig";

export interface Admin {
    id?:number;
    email:string;
    password:string;
}

export const getAdmin = async(email:string) => {
  const result = await pool.query('SELECT * FROM admin WHERE email=$1',[email])
  return result.rows[0]
}