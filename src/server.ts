// libs
import express from 'express'
import morgan from 'morgan'
import productsRoute from './routes/products'
import usersRoute from './routes/users'
import ordersRoute from './routes/orders'
import authRoute from './routes/auth'
import product_orderRoute from './routes/product_order'
import bodyParser from 'body-parser'
import cors from 'cors'

// declaring app
const app = express()
const port = process.env.PORT || 3000

// middleware database
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

// app.use(cors)
// app.use(morgan('dev'));
app.use(morgan('common'))
app.use('/api/store/', productsRoute)
app.use('/api/store/', usersRoute)
app.use('/api/store/', ordersRoute)
app.use('/api/store/', authRoute)
app.use('/api/store/', product_orderRoute)

// server listening
app.listen(port, () => {
  console.log(`this is my server running on PORT: ${port} `)
})

//
// app.use (bodyParser)
// app.use(express.urlencoded({extended:false}));
export default app
