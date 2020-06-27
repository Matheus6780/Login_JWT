import { Router } from 'express'
import UserController from '../controllers/userController'

const router = Router()

router.post('/user/register', UserController.register)
router.post('/user/login', UserController.login)

export default router