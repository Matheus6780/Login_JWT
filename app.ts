import express from 'express'
import dotenv from 'dotenv'
import UserRoutes from './routes/userRoutes'
import AdminRoutes from './routes/adminRoutes'

dotenv.config()

const app = express()

const port = process.env.PORT || 5000

app.use(express.json())
app.use(UserRoutes)
app.use(AdminRoutes)

app.listen(port, () => console.log(`Server running on port ${port}...`))