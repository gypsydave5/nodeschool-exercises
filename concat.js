var concat = require('concat-stream');

process.stdin.pipe(concat(reverseBuffer))

function reverseBuffer(buffer) {
  console.log(buffer.toString().split('').reverse().join(''));
}

