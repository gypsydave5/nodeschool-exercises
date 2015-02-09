var tr = require('through')(write, end)

function write(buffer) { this.queue(buffer); }
function end(buffer) { this.queue(null); }

process.stdin.pipe(tr).pipe(process.stdout);