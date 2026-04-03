const mongoose = require('mongoose')

const userScheme = new mongoose.Schema({
    name:{ type:String, required:true, trim:true},
    email:{ type:String, required:true, trim:true},
    password:{ type:String, required:true, trim:true},
})

module.exports = new mongoose.model("user", userScheme)