const mongoose = require('mongoose');
const mongooseLocal = require('passport-local-mongoose');


const Schema = new mongoose.Schema(
{
    name:
    {
       type:String,
       required:true
    } ,
    username: 
    {
        type:String,
        require:true
    },
    password:
    {
        type:String,
        require:true
    }  
});

Schema.methods.validPassword = function( password ) {
    return ( this.password === password );
};

mongoose.plugin(mongooseLocal);

module.exports= mongoose.model("Admin",Schema);