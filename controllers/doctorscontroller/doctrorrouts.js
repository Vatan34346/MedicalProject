const rout = require('express').Router();
const docFunctions = require('./doctor');
const login = require('../middleware/middleware');

rout.get('/EditDoctor/:id',login.LogIn,docFunctions.updateDoctordPage);
rout.get('/createDoctor',login.LogIn,docFunctions.createDoctor);
rout.post('/addDoctor',docFunctions.addDoctor);
rout.get('/doctors/:id',login.IsUserOrNot,docFunctions.singleDoctor);
rout.put('/updateDoctor/:id',docFunctions.update);
rout.delete('/doctors/:id',docFunctions.deleteDoctor);
module.exports =rout;