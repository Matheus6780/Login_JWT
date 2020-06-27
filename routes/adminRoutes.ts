import { Router } from 'express'
import auth from '../controllers/authController'

const router = Router()

router.get('/admin', auth, (req, res) => {

    if (req.body.user.admin)
        return res.json({msg: 'This content is allowed only for the admin'})

    return res.status(403).json({ msg: 'Not a admin.' })
})

export default router
