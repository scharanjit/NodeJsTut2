/**
 * Created by charanjits on 29/6/16.
 */
 var http=require('http');

function onRequest(request,response){
    console.log("A user made a request .."+request.url);
    response.writeHead(200,{"Context-Type":"text/plane"});  //can send response as files etc too
    response.write("Here is some data");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server is running......");