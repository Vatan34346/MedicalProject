const Clinicks = require('../../Schemas/clinickList');


const createClinick = (req,res,next)=>
{
    res.render('Clinicks/CreateClinick');
}

const addClinick = (req,res,next)=>
{
    const newClinick = new Clinicks(
        {
            Image:req.body.img,
            Mail:req.body.email,
            About:req.body.textA,
            username:req.body.name
        }
    ).save().then((data)=>{res.redirect('/Clinicks/createClinick')}).catch(next);
};

const sincgleClinick = async (req,res,next)=>
{
   try
   {
        const singleClinick = await Clinicks.findById(req.params.id);
        res.render('Clinicks/SingleClinick',{singleClinick:singleClinick,isLogged:req.isLogged});
   }
   catch
   {
    next();
   }
};

const updateClinicksPage = async (req,res,next)=>
{
    try
    {
        const clinick = await  Clinicks.findById(req.params.id);
        res.render('Clinicks/updateClinick',{clinick:clinick}); 
    }
    catch
    {
        next();
    }
}

const update = (req,res,next)=>
{
    const updated = 
    {
        Image:req.body.img,
        Mail:req.body.email,
        About:req.body.textA,
        username:req.body.name
    };

    Clinicks.findByIdAndUpdate(req.params.id,updated)
            .then((data)=>{res.redirect('/medic/clinicks')})
            .catch(next);
}

const deleteClinick = (req,res,next)=>
{
    Clinicks.findByIdAndRemove(req.params.id)
    .then((data)=>{res.redirect('/medic/clinicks')})
    .catch(next);
}

module.exports = 
{
    createClinick,addClinick,sincgleClinick,updateClinicksPage,update,deleteClinick
};