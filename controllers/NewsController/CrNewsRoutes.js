const rout = require('express').Router();
const newFunc = require('./news');
const login =  require('../middleware/middleware');

rout.get('/EditNews/:id',login.LogIn,newFunc.updateNewsPage)
rout.get('/addNews',login.LogIn,newFunc.creatNews);
rout.post('/addNews',newFunc.addNews);
rout.get('/news/:id',login.IsUserOrNot,newFunc.singlePage);
rout.delete('/news/:id',newFunc.deletePage);
rout.put('/update/:id',newFunc.update);

module.exports =rout;