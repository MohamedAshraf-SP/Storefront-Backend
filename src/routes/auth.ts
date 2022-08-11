import express from 'express'
import { auth } from '../controllers/auth'

const authRoute = express.Router()

authRoute.get('/user/auth/:id', auth)

export default authRoute
