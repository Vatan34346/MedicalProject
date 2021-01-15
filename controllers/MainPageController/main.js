const News = require('../../Schemas/newsList');
const Doctors = require('../../Schemas/doctorList');
const Clinicks = require('../../Schemas/clinickList');

const indexPage = async (req,res,next)=>
{
  
    const news = await News.find();
    res.render('mainpage/index',{news:news,isLogged:req.isLogged});
 
};

const clinickPage = async (req,res,next)=>
{   
    const clinicks = await Clinicks.find();
    res.render('mainpage/clinicks',{clinicks:clinicks,isLogged:req.isLogged});
};

const doctorsPage = async (req,res,next)=>
{   
    const newDoc = await Doctors.find();
    res.render('mainpage/doctors',{newDoc:newDoc,isLogged:req.isLogged});
};

const aboutPage = (req,res,next)=>
{
    res.render('mainpage/about');
};

module.exports =
{
    indexPage,clinickPage,doctorsPage,aboutPage
};