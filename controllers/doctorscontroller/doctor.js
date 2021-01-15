const Doctors = require('../../Schemas/doctorList');


const createDoctor = (req,res,next)=>
{
    res.render('Doctors/CreateDoctor');
};

const addDoctor=(req,res,next)=>
{
    const newDoctor = new Doctors({
        Image:req.body.img,
        Mail:req.body.email,
        About:req.body.textA,
        username:req.body.name
    }).save().then((data)=>console.log(data)).catch(next);
    res.redirect('/Doctors/createDoctor');

};

const singleDoctor = async (req,res,next)=>
{
    try
    {
        const doctor = await Doctors.findById(req.params.id);
        res.render('Doctors/SingleDoctor',{doctor:doctor,isLogged:req.isLogged});
    }
    catch{(err)=>console.log(err);}
     
};

const updateDoctordPage = async (req,res,next)=>
{
    try
    {
        const oldDoc= await Doctors.findById(req.params.id);
        res.render('Doctors/updateDoctor',{oldDoc:oldDoc})
    }
   catch{(err)=>console.log(err);}

}


const update =(req,res,next)=>
{
    const updated = 
    {
        Image:req.body.img,
        Mail:req.body.email,
        About:req.body.textA,
        username:req.body.name
    }

    Doctors.findByIdAndUpdate(req.params.id,updated)
           .then((data)=>{res.redirect('/medic/doctors')})
           .catch(next);
}

const deleteDoctor =(req,res,next)=>
{
    Doctors.findByIdAndRemove(req.params.id)
           .then((data)=>{res.redirect('/medic/doctors')})
           .catch(next)
}





module.exports =

{
    createDoctor,addDoctor,singleDoctor,updateDoctordPage,update,deleteDoctor
};