require('dotenv').config()

const express = require('express')
const app = express()

require('express-async-errors')

const PORT = process.env.PORT || 3000
const DB_CONNECTION_URI = process.env.MONGO_DB_URI || 'mongodb+srv://<USER>:<PASS>@<URL>/store-api?retryWrites=true&w=majority'
const connectDB = require('./db/connect')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const productsRoutes = require('./routes/products')

// Middleware
app.use(express.json())

// Routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>')
})

app.use('/api/v1/products', productsRoutes)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async () => {
    try{
        connectDB(DB_CONNECTION_URI)
        app.listen(PORT, console.log(`Server is listening port: ${PORT}`))
    }
    catch(error) {
        console.error(error)
    }
}

start()