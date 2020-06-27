import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export default async (req: Request, res: Response, next: NextFunction) => {

    const token = req.header('authorization-token')

    if (!token) return res.status(403).json({ msg: 'Access denied.' })

    try {
        
        const userVerified = jwt.verify(token, String(process.env.TOKEN_SECRET))

        req.body.user = userVerified
        next()

    } catch (error) {
        
        return res.status(403).json({ msg: 'Access denied.' })
    }

}