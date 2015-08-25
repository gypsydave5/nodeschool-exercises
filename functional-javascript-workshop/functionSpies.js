var slice = Array.prototype.slice;

function Spy (object, functionName) {
  result = { count: 0 };

  var oldFun = object[functionName];

  function newFun () {
    result.count++;
    var args = slice.call(arguments);
    return oldFun.apply(object, arguments);
  }

  object[functionName] = newFun;

  return result
}

module.exports = Spy;

// an exiciting lesson about scope and reference...
// as the below doesn't work


var slice = Array.prototype.slice;

function Spy (object, functionName) {
  var result = 0

  var oldFun = object[functionName];

  function newFun () {
    result++;
    var args = slice.call(arguments);
    return oldFun.apply(object, arguments);
  }

  object[functionName] = newFun;

  return { count: result };
}

// simply because the result needs to be passed by reference to the actual
// object, and primitivies pass by value
//
// Further example

function passByWhut () {
  var a = 1;
  var bar = { c: 1, d: 1};
  var object = { a: a, b: 1, c: bar.c, d: bar.d, bar: bar};
  a++;
  object.b++;
  object.c++;
  bar.d++;
  return object;
} // => { a: 1, b: 2, c: 2, d: 1, bar: { c: 1, d: 2 } };

console.log(passByWhut());

// the bar.c & d are still being passed by value, even though the object they
// are in is being passed by reference.
//
// Perhapr a better way to look at this is through the ideas of mutability and
// immutability, as per this SO post
// - http://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language
// and thinking about call by reference
// https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_sharing
//
// The basic point is that if the thing passed is mutable, then you can mutate
// it as a reference. Else it is a value.
