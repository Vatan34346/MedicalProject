const mongoose = require('mongoose');

const mongooseLocal = require('passport-local-mongoose');


const  Schema =  new mongoose.Schema(
    {
        Image:String,
        Mail:String,
        About:String,
        username:String
    }
);


mongoose.plugin(mongooseLocal);


module.exports= mongoose.model('doctors',Schema);