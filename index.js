// Load the http module to create an http server.
var http = require("http");

var server = http.createServer(function (request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Hello World\n");
});

// The server is listening on port 8080
server.listen(3000);


console.log("server listening at port 3000, navigate to http://127.0.0.1:3000");
