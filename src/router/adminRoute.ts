import { Router } from "express";
import  {adminLogin} from '../controller/adminController'

const router = Router()

router.post('/login',adminLogin)
router.get('/logout',)

export default router;

