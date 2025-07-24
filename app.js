
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/notfound')
require('dotenv').config()

//midllesware
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/api/v1/tasks',tasks)
app.use(notFound)

const port = 3000
const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log('Port Running'))
    }
    catch(error){
        console.log(error)
    }
}
start()
