var strftime = require('strftime');
var net = require('net');
var date = strftime('%Y-%m-%d %H:%M');

var server = net.createServer(function (socket) {
  socket.end(date + "\n");
});

server.listen(process.argv[2]);