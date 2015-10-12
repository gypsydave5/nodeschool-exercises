'use strict';

module.exports = function filterForNumbers(iterable) {
  if (!iterable.next) { iterable = iterable[Symbol.iterator](); }
  let result = [];
  let done = false;
  while (!done) {
    let next = iterable.next();
    if (typeof next.value === 'number') { result.push(next.value) }
    done = next.done;
  }

  return result;
}

// duh... just use the exposed iterator using for...
// which covers both exposed and unexposed iterators

module.exports = (iterable) => {
  let result = [];

  for (let i of iterable) {
    if (typeof i === 'number') result.push(i);
  }

  return result;
}
