const rout = require('express').Router();
const clinickFunction = require('./clinick');
const login = require('../middleware/middleware');


rout.get('/createClinick',login.LogIn,clinickFunction.createClinick);
rout.post('/addClinick',clinickFunction.addClinick);
rout.get('/Clinicks/:id',login.IsUserOrNot,clinickFunction.sincgleClinick);
rout.get('/EditClinick/:id',login.LogIn,clinickFunction.updateClinicksPage);
rout.put('/UpdateClinick/:id',clinickFunction.update);
rout.delete('/Clinicks/:id',clinickFunction.deleteClinick);

module.exports =rout;