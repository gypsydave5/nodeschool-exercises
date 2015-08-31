function curryN (fn, n) {
  n = n || fn.length;
  if (n === 1) { return fn; }
  return function (arg) {
    return curryN(fn.bind(fn, arg), n - 1);
  };
}

module.exports = curryN;

// official solution

function curryN(fn, n) {
  n = n || fn.length;
  return function curriedN(arg) {
    if (n <= 1) return fn(arg);
    return curryN(fn.bind(this, arg), n - 1);
  };
}
