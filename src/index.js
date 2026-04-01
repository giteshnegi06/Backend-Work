const mongoose = require("mongoose")
const express = require("express")

const app = express()
const port = 5000;

const mongourl = ""
mongoose.connect(mongourl)

.then(()=>{console.log(``)})
.catch((e)=>{console.log(``${e})})
app.listen(port,()=>{console.log(""${port});})