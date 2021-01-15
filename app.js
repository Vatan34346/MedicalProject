const express = require('express');
const methodsOverride = require('method-override');
const bp = require('body-parser');
const database = require('./database/database');
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('./Schemas/adminlist');
const LocalStrategy  = require('passport-local').Strategy;
const session = require('express-session')({secret:'are u an admin',resave:false,saveUninitialized:false});
const app = express();


let PORT = process.env.PORT||3000;


app.set('view engine','ejs');

//middleware
app.use(express.static(__dirname+'/public'));
app.use(bp.urlencoded({extended:false}));
app.use(methodsOverride('_method'));
app.use(session);
app.use(passport.initialize());
app.use(passport.session());
app.use('/admin',require('./controllers/admincontroller/adminroutes'));
app.use('/medic',require('./controllers/MainPageController/mainroutes'));
app.use('/News',require('./controllers/NewsController/CrNewsRoutes'));
app.use('/Doctors',require('./controllers/doctorscontroller/doctrorrouts'));
app.use('/Clinicks', require('./controllers/clinickscontroller/clinickRoots'));

app.use((err,req,res,next)=>
{
    res.status(404).send({error:err.message});
});
//


//connect to tadabase
mongoose.Promise =global.Promise;
mongoose.connect(database.url,{useUnifiedTopology: true, useNewUrlParser: true,useCreateIndex:true,useFindAndModify:false})
        .then(console.log('connected to data base'))
        .catch(err => console.log(err));
//

//passport
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
  passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));
  
  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/medic');
  });

  app.post('/admin/login',
  passport.authenticate('local', 
  {
      successRedirect: '/admin/panel',
      failureRedirect: '/admin/login'
  })                                
);
///
app.listen(PORT,()=>
{
    console.log(`listen to Port:${PORT}`);
});