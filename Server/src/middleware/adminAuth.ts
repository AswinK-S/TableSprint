import jwt from 'jsonwebtoken'
import { Request,Response,NextFunction } from 'express'

interface DecodedToken {
    id: number;
    role: string;
}

export const adminAuth = async (req:Request,res:Response,next:NextFunction)=>{
    try {
   
        const token = req.cookies.adminToken
        
        if(!token){
            return res.status(401).json({message:'Unauthorized access'})
        }

        const decode = jwt.verify(token,process.env.Jwt_Secret as string) as DecodedToken
       
        if(decode?.role !=='admin'){
            return res.status(403).json({message:'Forbidden: Access denied'})
        }
        next()
    } catch (error) {
        console.error(error as Error)
        res.status(401).json({message:'Unauthorized: Invalid token'})
    }
}