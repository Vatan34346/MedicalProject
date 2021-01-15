const User = require('../../Schemas/adminlist');







const login = (req,res,next)=>
{
    res.render('Admin/login');
};

const  register = (req,res,next)=>
{
    res.render('Admin/register');
};

const createAdmin =(req,res,next)=>
{
    const newAdmin = new User(
    {
        name:req.body.name,
        username:req.body.email,
        password:req.body.pass
    }).save().then((data)=>console.log(data)).catch(next);
    res.redirect('/Admin/login');              
};

const adminPanel = (req,res,next)=>
{
    res.render('Admin/admin');
}

module.exports = 
{
    register,login,createAdmin,adminPanel
};