const routes = require('express').Router();
const admin = require('./admin');
const auth = require('../middleware/middleware');



routes.get('/register',admin.register);
routes.get('/login',admin.login);
routes.get('/panel',auth.LogIn,auth.IsUserOrNot,admin.adminPanel);
routes.post('/register',admin.createAdmin);


module.exports = routes;
