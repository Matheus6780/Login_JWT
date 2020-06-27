import { Request, Response, text } from 'express'
import knex from '../database/connection'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Validate from '../controllers/validate'

const { loginValidate, registerValidate } = Validate

export default {

    async register(req: Request, res: Response) {
        
        const { error } = registerValidate(req.body)

        if (error) return res.status(400).send(error.message)

        // admin foi adicionado para testar rotas protegidas
        let { name, email, password, admin } = req.body

        const salt = bcrypt.genSaltSync(14)

        password = bcrypt.hashSync(password, salt)

        try {
            if (!name || !email || !password) 
            return res.status(400).json({ msg: 'Name, Email and password required.' })

            await knex('users').insert({ name, email, password, admin })

            res.json({ msg: 'User registered.' })

        } catch (error) {

            if (error.code === '23505')
            return res.status(409).json({ msg: 'Email already registered.' })

            console.log(error)
            res.status(500).json({ msg: 'An error ocurred. User not registered.' })
        }
    },

    async login(req: Request, res: Response) {

        const { error } = loginValidate(req.body)

        if (error) return res.status(400).send(error.message)
        
        let { email, password } = req.body

        try {
            const [ user ] = await knex('users').where({ email })

            if (!user) 
            return res.status(404).json({ msg: 'Email or password incorrect.' })

            const authenticated = bcrypt.compareSync(password, user.password)

            if (!authenticated) return res.status(401).json({ msg: 'Not allowed.' })

            const token = jwt.sign({ id: user.id, admin: user.admin }, String(process.env.TOKEN_SECRET))

            res.header('authorization-token', token)

            res.json({ msg: 'Logged in.' })
        
        } catch (error) {

            console.log(error)
            res.status(500).json({ msg: 'An error ocurred.' })
        }
    }
}