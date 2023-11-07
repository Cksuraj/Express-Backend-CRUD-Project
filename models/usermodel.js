// data base se oprations karne ke liye

const mongoose =require('mongoose');              // Model requiers mongoose 

// Here what ever Schema jo chahiye vo schema create karna or export karana mat bhulna 

const userschema =new mongoose.Schema({           // Syntax for Usermodule 
     name:{
        type:String,
        required:[true,'name is reuired'],                //  Createing object and value 
        trim:true,
        maxLength:[20,'Email is required']
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true
    }
},{
    timestamps:true,                                     // to get real time 
})

module.exports =mongoose.model('User',userschema)