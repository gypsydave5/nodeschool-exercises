var fs = require('fs');
var http = require('http');
var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function (request, response) {

  fileStream = fs.createReadStream(file);

  fileStream.on('open', function() {
    response.writeHead(200, {'content-type': 'text/plain'});
    fileStream.pipe(response);
  });

  fileStream.on('error', function() {
    response.writeHead(400);
  });
})

server.listen(port);