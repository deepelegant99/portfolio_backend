const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dbConnection= require('./database/connectDB')
require('dotenv').config()

app.listen(5000, () => {
    console.log('Listening at port 5000')
    dbConnection();
})

app.get('/', (req, res) => {
    res.send("Hello World")
})
