import {Request,Response} from 'express'
import { getAdmin } from '../models/admin'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const adminLogin = async(req:Request,res:Response)=>{
    const {email, password} =req.body
    
    try{
      const admin = await getAdmin(email)
        if(!admin){
            return res.status(401).json({error:'invalid credentials'})
        }

        const isPasswordMatch = await bcrypt.compare(password,admin.password)
        if(!isPasswordMatch){
            return res.status(401).json({error:'invalid credentials'})
        }

        
        const token =jwt.sign({id:admin.id,role:'admin'},process.env.Jwt_Secret as string,{expiresIn:'1h'})

        res.cookie('adminToken',token,{
            httpOnly:true,
            secure:process.env.Node_ENV ==='production',
            maxAge:3600000
        })

        res.status(200).json({message:'Login successful'})
    }catch(error){
        console.error (error)
        res.status(500).json({error:'server error'})
    }
}
