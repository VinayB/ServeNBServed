var express = require('express')
, fs = require('fs')
, landingRoutes = require('./routes/LandingRoutes.js')  
, errorRoutes = require('./routes/errorRoutes.js')
, app = express();

var auth = require('./auth.js');
/* 
Constants - each developer may change to suite their setup 
*/
var PORT = process.env.PORT || 8888;


//Configure express application object
app.configure(function(){
    // parse form posts
    app.use(express.bodyParser());

    // Default views directory
    app.set('views', __dirname + '/views');
    // View engine, for now will be ejs
    app.set('view engine', 'ejs');
    // Indicate from where the static files will be served
    // /public folder will house css, images, etc 
    app.use(express.static(__dirname + '/public'));
}); // app Config end

// No default layout is being used for now
app.set('view options', {
    layout: false
});

// Read the file name from approutes.js
app.get('/', landingRoutes.getHome);
//app.get('/', landingRoutes.getHeadBodyFoot);
//app.post('/signup', landingRoutes.getSignup);
app.get('/signup', landingRoutes.signup);
app.post('/register',auth.registerNewUser);
app.post('/login', auth.login);

app.listen(PORT, function(){
    console.log("Listening on " + PORT);
});
