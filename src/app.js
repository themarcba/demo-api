const express = require('express')

const demoRouter = require('./routers/demo.router')

const app = express()
app.use(express.json())
app.use(demoRouter)

module.exports = app