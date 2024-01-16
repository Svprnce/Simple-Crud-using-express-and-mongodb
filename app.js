const dotenv = require('dotenv')
const path = require('path')
const express = require('express')
const router = require('./routes/productroute')
const bodyParser = require('body-parser')
const { productmiddleware, producttwomiddleware } = require('./middleware/productmiddleware')
const app = express()

dotenv.config({path : path.join(__dirname,'config','.env')})

app.use(bodyParser.json())
app.use('/api',router)


app.use(productmiddleware)
app.use(producttwomiddleware)

module.exports = app

