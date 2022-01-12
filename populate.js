require('dotenv').config()

const DB_CONNECTION_URI = process.env.MONGO_DB_URI || 'mongodb+srv://<USER>:<PASS>@<URL>/store-api?retryWrites=true&w=majority'

const connectDB = require('./db/connect')
const Product = require('./models/product')
const jsonProducts = require('./products.json')

const start = async () => {
    try {
        await connectDB(DB_CONNECTION_URI)
        console.log('Connected to DB')
        
        await Product.deleteMany()
        console.log('Deleted existing')

        await Product.create(jsonProducts)
        console.log(`Added ${jsonProducts.length} records`)
        process.exit(0)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

start()