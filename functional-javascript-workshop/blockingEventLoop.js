function repeat (operation, num) {
  if (num <= 0) return;
  operation()

  if (num % 10 === 0) {
    setTimeout(function () { repeat(operation, --num) });
  } else {
    repeat(operation, --num)
  }
}

module.exports = repeat

// but consider also

function repeat (operation, num) {
  if (num <= 0) return;
  operation()
  setTimeout(function () { repeat(operation, --num) });
}

// which releases the loop back on every tick, rather than every 10 or so
// so we can play with some experiments... see blockingEventLoopTests.js

