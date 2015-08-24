function reduce (array, fun, initialValue) {
  if (array.length === 0) return initialValue;

  return reduce(array.slice(1),
                fun,
                fun(initialValue, array[0]));
}

// the above works, but entirely fails to track the index or the original array
// (yet still passes the tests...)

function verboseReduce (array, fun, initialValue) {
  return (function reduceOne (index, memo) {
    if (index > array.length -1) return memo;

    return reduceOne(index + 1,
                     fun(memo, array[index], index, array ))
  })(0, initialValue);
}

//this covers it, but introduces an inner function to handle the recursion
// while still keeping the reference to the original call

module.exports = verboseReduce;