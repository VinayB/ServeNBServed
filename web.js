var express = require('express');

var app = express();

app.get('/', function(request, response){
    response.send('Hello world');
});

var port = process.env.PORT || 8888;

app.listen(port, function(){
    console.log("Listening on " + port);
});

