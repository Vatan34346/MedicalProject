
//controll panel
const LogIn = (req,res,next)=>
{
    if(req.isAuthenticated())
    {
        return next();
    }
    else
    {
        res.redirect('/admin/login');
    }
};

const  IsUserOrNot = (req,res,next)=>
{
    if(req.isAuthenticated())
    {
        req.isLogged =true;
        return next();
    }
    else
    {
        req.isLogged=false;
        return next();
    }
}

module.exports =
{
    LogIn,IsUserOrNot
};