import { Pool } from "pg";
import dotenv from 'dotenv'
dotenv.config()

const user_name = process.env.Psql_User as string
const database_name = process.env.Psql_Database as string
const password = process.env.Psql_Password as string


const pool = new Pool({
    user:user_name,
    host:'localhost',
    database:database_name,
    password:password,
    port:5432
})

export default pool;