import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
dotenv.config()

// routes 
import adminRoute from './router/adminRoute'
import productRoute from './router/productRoute'
import categoryRoute from './router/categoryRoute'

const app = express()
const port = 4000

app.use(express.json())
app.use(cookieParser())

app.use('/api/admin',adminRoute)
app.use('/api',productRoute)
app.use('/api',categoryRoute)


app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
})
