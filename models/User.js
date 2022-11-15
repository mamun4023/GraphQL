const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    email : { 
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
        select : false,
        // match : ["reqular exp", "error message"]
    },
    displayName : {
        type : String,
        required : true,
    }
  
},{timestamps : true})