const mongoose = require('mongoose')

const userScheme = new mongoose.Schema({
    name:{ type:String, require:true, trim:true},
    email:{ type:String, require:true, trim:true},
    password:{ type:String, require:true, trim:true},
})

module.exports = new mongoose.model("user", userScheme)