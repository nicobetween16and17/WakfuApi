const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require ('./database.js')

const app = express()

const {port} = require('./config/server.json')

app.use(express.json())

app.use(bodyParser.json())

app.use(cors())

const api = require('./routes/api')
app.use('/api',api)

app.listen(port,()=>{
    console.log(`connected between ${port}`)
})