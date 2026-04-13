const mongoose = require('mongoose')

const userScheme = new mongoose.Schema({
    name:{ type:String, required:true, trim:true},
    email:{ type:String, required:true, trim:true},
    password:{ type:String, required:true, trim:true},

    role: { 
        type: String,
        enum: ['admin', 'user', 'volinter'],
        trim: true,
        required: true,
    },

    verification:{
        user:{
            userotp: {
                type: String,
                default: '0',
            },
            isVerify:{
                type: Boolean,
                default: false,
            },
            isDeleted:{
                type: Boolean,
                default: false,
            },
            isAccountActive:{
                type: Boolean,
                default: false,
            }
        },
        admin:{
            adminotp:{
                type: String,
                default: '0',
            },
            isVerify:{
                type: Boolean,
                default: false
            }
        }
    }
    
})

module.exports = new mongoose.model("user", userScheme)