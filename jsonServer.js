var http = require('http');
var port = process.argv[2];
var url = require('url');

var parseTime = function (time) {
  return  {
      "hour": time.getHours(),
      "minute": time.getMinutes(),
      "second": time.getSeconds()
    }
}

var parseUnixtime = function (time) {
  return {
    "unixtime": time.valueOf()
  }
}

var server = http.createServer( function (request, response) {

  var pathname = url.parse(request.url, true).pathname;
  var isoTime = url.parse(request.url, true).query.iso;
  var time = new Date(isoTime);
  var result;

  if (pathname === "/api/parsetime") {
    result = JSON.stringify(parseTime(time));
  }

  if (pathname === "/api/unixtime") {
    result = JSON.stringify(parseUnixtime(time));
  }

  if (result) {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(result);
  } else {
    response.writeHead(200)
    response.end();
  }

});

server.listen(port);
