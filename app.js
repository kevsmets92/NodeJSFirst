var http = require('http');
var sys=require('sys');
var server = http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.end("Hello World\n");
});
server.listen(7000);
sys.puts("running on localhost:7000");