function map (array, fun) {
  return array.reduce(function (memo, item) {
    memo.push(fun(item));
    return memo;
  }, [])
}

module.exports = map;

// official solution

module.exports = function map (arr, fn, thisArg) {
  return arr.reduce(function (acc, item, index, arr) {
    acc.push(fn.call(thisArg, item, index, arr))
    return acc
  }, [])
}