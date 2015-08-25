function timer (start) {
  return function () {
    return console.log(Date.now() - start);
  };
}

function repeat10s (operation, num, callback) {
  if (num <= 0) {
    console.log('---10s---');
    return callback();
  }
  operation()
  if (num % 10 === 0) {
    setTimeout(function () { repeat10s(operation, --num, callback) });
  } else {
    repeat10s(operation, --num, callback)
  }
}

function repeat1s (operation, num, callback) {
  if (num <= 0) {
    console.log('---1s---');
    return callback();
  }
  operation()
  setTimeout(function () { repeat1s(operation, --num, callback) });
}

function repeat100s (operation, num, callback) {
  if (num <= 0) {
    console.log('---100s---');
    return callback();
  }
  operation()
  if (num % 100 === 0) {
    setTimeout(function () { repeat100s(operation, --num, callback) });
  } else {
    repeat100s(operation, --num, callback)
  }
}

function noop () {};

var loops = 1000
repeat1s(noop, loops, timer(Date.now())); // => ~1370
repeat10s(noop, loops, timer(Date.now())); // => ~155
repeat100s(noop, loops, timer(Date.now())); // => ~28

// I guess it depends on how often you want to unblock... :D
