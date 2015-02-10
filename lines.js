var through = require('through');
var split = require('split');
var counter = 0;

var linesAlternateCase = through(
  function (line) {
    counter++;
    counter % 2 === 0
      ? this.queue(line.toString().toUpperCase() + "\n")
      : this.queue(line.toString().toLowerCase() + "\n")
  }
);

process.stdin.pipe(split()).pipe(linesAlternateCase).pipe(process.stdout);