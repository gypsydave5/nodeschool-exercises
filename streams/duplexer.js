var spawn = require('child_process').spawn;
var duplex = require('duplexer');

module.exports = function (command, arguments) {
  var childProcess = spawn(command, arguments);
  return duplex(childProcess.stdin, childProcess.stdout);
};