function repeat (operation, num) {
  if (num <= 0) return operation();
  return repeat(operation, --num);
}

function trampoline (fn) {
  while (fn && typeof fun === 'function') {
    fn = fn();
  }
}

module.exports = function(operation, num) {
  return trampoline(function () {
    return repeat(operation, num);
  });
};

// need return values...
// thunky tramp...

function factorial (number, total) {
  total = total || 0;
  if (number === 0) return total;
  var newTotal = number + total;
  return factorial(number - 1, newTotal);
}

function factorial2 (number, total) {
  total = total || 0;
  if (number === 0) return total;
  var newTotal = number + total;
  return thunk(factorial2, number - 1, newTotal);
};

function trampoline2 (thunk) {
  while (typeof thunk === 'function') {
    thunk = thunk();
  }
  // also...
  // while (typeof thunk === 'function') thunk = thunk()
  // or...
  // while (typeof (thunk = thunk()) === 'function')
  return thunk;
}

function thunk (fn) {
  return fn.bind.apply(fn, arguments);
}

function trampFactorial (number) {
  return trampoline2(thunk(factorial2, number));
}

// console.log(factorial(1000000)); => blows the stack
console.log(trampFactorial(100000)); // doesn't :D
