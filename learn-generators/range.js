'use strict';

function *range (first, last) {
  let value = first;
  while (value <= last) yield value++;
}

// could one line this but we'd mutate the args...

for (let num of range(5, 10)) console.log(num);
