'use strict'

const express = require('express')
const app = express()
const PORT = process.env.port || 8080

require("dotenv").config()

let dbConnect = require("./dbConnect")
let userRoutes = require('./routes/userRoutes') 
let projectRoutes = require('./routes/projectRoutes')
let languageRoutes = require('./routes/languageRoutes')
let databaseRoutes = require('./routes/databaseRoutes')

app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/projects', projectRoutes)
app.use('/api/languages', languageRoutes)
app.use('/api/databases', databaseRoutes)

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my SQL application. Please input a query to get started!" })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})