const mongoose = require ('mongoose')
const express = require ('express')
const route = require('./Routes/Usserroutes')
const dotenv = require ('dotenv')
dotenv.config()

const app = express()
app.use(express.json())
const port = process.env.port || 8000;

mongoose.connect(process.env.mongosurl)

.then(()=>{console.log('The mongoDB is connected suceeesfully')})
.catch((e)=>{console.log(`There is an error: ${e}`)})
app.listen(port,()=>{console.log(`The server is running the port: ${port}`)})

app.use('/', route)