const mongoose = require ('mongoose')
const express = require ('express')
const {evenOdd} = require('./Controller/usercontrolls')

const app = express()
const port = 5000;

const mongourl = 'mongodb+srv://negigitesh_db_user:GlV0rvqZnOIvw5ql@gitesh.1ziv0xy.mongodb.net/'
mongoose.connect(mongourl)

.then(()=>{console.log('The mongoDB is connected suceeesfully')})
.catch((e)=>{console.log(`There is an error: ${e}`)})
app.listen(port,()=>{console.log(`The server is running the port: ${port}`)})

console.log(evenOdd(2))