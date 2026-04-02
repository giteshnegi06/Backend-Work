const mongoose = require('mongoose')

const userScheme = new mongoose.Schema({
    name:{Type:String, require:true, trim:true},
    email:{Type:String, require:true, trim:true},
    password:{Type:String, require:true, trim:true},
})

module.exports = new mongoose.model("user", userScheme)