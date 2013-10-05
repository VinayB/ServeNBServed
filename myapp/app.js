var express = require('express')
, fs = require('fs')
, testroutes = require('./routes/testroutes.js')  
, app = express();


// Configure application object
app.configure(function(){

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
app.get('/', testroutes.getIndex);

/*
app.get('/', function(req, res){
    res.send('index.html');
});

app.get('/', function(request, response){
    response.send(fs.readFileSync('index.html', 'utf8'));
});
*/

var port = process.env.PORT || 8888;

app.listen(port, function(){
    console.log("Listening on " + port);
});
