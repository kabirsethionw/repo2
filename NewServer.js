// creating a server in Node.JS
var http = require('http'); // we use core module http of node.JS
// creating a server with the help of method of http midule
var Server = http.createServer((req,res)=>{ // req comes loaded with the details of request that has been made and res is used to send response back to client
// [note]: with the request & response data we do send header info that tells browser something about html document but its not for the display purpose
//Header contains info like 1) Content-type, so the browser knows what to expect, 2) status, code like 404, 200, etc.
res.writeHeader(200,{'Content-Type': 'text/plain'});
res.end('Writting a plaint text as it matches the content-type /n request on url: ' + req.url);
});
//Setting port no. as the sever listens to a certain port no.
Server.listen(3000,'127.0.0.1'); 
console.log('Now listening to port 3000');