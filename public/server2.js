/**
 * Created by charanjits on 29/6/16.
 */
//npm install connect //in side roejct directory node _modules
//purpose of connect is to figure out url or which page user want to access

var connect = require('connect');
var http = require('http');

var app= connect();

function doFirst(request, response ,next){
    console.log("Bacon")
    next();
}


function doSecond(request, response ,next){
    console.log("Tune")
    next();
}

app.use(doFirst);
app.use(doSecond);


function profile(request,response){
    console.log("User requested profile")
}

function forum(request,response){
    console.log("User requested forum")
}

app.use('/profile',profile);
app.use('/forum',forum);

http.createServer(app).listen(8888);
console.log("Server 2 is running... ")

