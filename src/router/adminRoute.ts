import { Router } from "express";
import  {adminLogin} from '../controller/adminController'

const router = Router()

router.post('/login',adminLogin)

export default router;

