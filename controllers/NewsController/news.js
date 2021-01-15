const News = require('../../Schemas/newsList');

const creatNews = (req,res,next)=>
{
    res.render('News/createNews');
};

const addNews = (req,res,next)=>
{
    const newN = new News(
        {
            Image:req.body.img,
            username:req.body.name,
            about:req.body.textA
        }
    ).save().then((data)=>console.log(data)).catch(next);
    res.redirect('/News/addNews');
};


const singlePage =  async (req,res,next)=>
{
    try
    {
    const singleP = await News.findById(req.params.id);
    res.render('News/singleNew',{singleP:singleP,isLogged:req.isLogged})
    }
    catch{
        (err)=>console.log(err);
    }
}

const deletePage =(req,res,next)=>
{
      News.findByIdAndDelete(req.params.id)
          .then((result)=>{res.redirect('/medic')})
          .catch(next);
};

const updateNewsPage =async (req,res,next)=>
{
    try
    {
            const update =  await News.findById(req.params.id)
            res.render('News/update',{update:update});
    }
    catch
    {
          (err)=>console.log(err);
    }
}

const update = (req,res,next)=>
{
    const updated =
        {
            Image:req.body.img,
            username:req.body.name,
            about:req.body.textA
        };
    
    News.findByIdAndUpdate(req.params.id,updated)
          .then((result)=>{res.redirect('/medic')})
          .catch(next);
}

module.exports =
{
    creatNews,addNews,singlePage,deletePage,updateNewsPage,update
};