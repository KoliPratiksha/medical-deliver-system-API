const mongoose = require('mongoose')

const medicalschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    NumberOfTablets:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    createdat:{
        type:Date,
        default:Date.now()
    }
    
})

module.exports = mongoose.model('medical4',medicalschema)