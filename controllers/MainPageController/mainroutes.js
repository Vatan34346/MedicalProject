const rout = require('express').Router();
const isLogged = require('../middleware/middleware');
const mainFunctions = require('./main');

rout.get('/',isLogged.IsUserOrNot,mainFunctions.indexPage);
rout.get('/clinicks',isLogged.IsUserOrNot,mainFunctions.clinickPage);
rout.get('/doctors',isLogged.IsUserOrNot,mainFunctions.doctorsPage);
rout.get('/about',mainFunctions.aboutPage);

module.exports=rout;