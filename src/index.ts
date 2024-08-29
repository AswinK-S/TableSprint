import express from 'express'
import adminRoute from './router/adminRoute'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = 4000

app.use(express.json())
app.use(cookieParser())

app.use('/api/admin',adminRoute)

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
})
