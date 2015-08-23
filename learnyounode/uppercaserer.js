var map = require('through2-map');
var http = require('http');
var port = process.argv[2];

var upcaseMyStream = function (input, output) {
 input.pipe( map ( function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(output);
}

var server = http.createServer( function (request, response) {

  if (request.method === 'POST') {
    upcaseMyStream(request, response);
  } else {
    response.end("Please send a POST.\n");
  }

});

server.listen(port);