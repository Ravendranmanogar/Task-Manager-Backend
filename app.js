
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/notfound')
const errorHandlerMiddleware = require('./middleware/error-handler')
require('dotenv').config()

//midllesware
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = 3000
//const port = process.env.PORT || 3000
const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Port Running ${port}`))
    }
    catch(error){
        console.log(error)
    }
}
start()
