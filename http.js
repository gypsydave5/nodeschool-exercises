var http = require('http');
var through = require('through');
var through2 = require('through2');

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') { req.pipe(upcaseStream).pipe(res); }
  else { res.end('Send me a POST please'); }
});

var upcaseStream = through(function write(buffer) {
  this.queue( buffer.toString().toUpperCase());
});

var upcaseStream = through2(function (buffer, _, next) {
  this.push(buffer.toString().toUpperCase());
  next();
});

var upcaseStream = through2(function (buffer, _, callback) {
  callback(null, buffer.toString().toUpperCase());
});

server.listen(process.argv[2]);