var upcaseStream = require('through')(
  function write(buffer) {
    this.queue(buffer.toString().toUpperCase());
  }
)

process.stdin.pipe(upcaseStream).pipe(process.stdout);