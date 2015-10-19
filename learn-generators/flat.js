'use strict';

function *flat (arr) {
  for (let i of arr) {
    if (!Array.isArray(i)) yield i;
    else yield* flat(i);
  }
}

// Is it still TCR if the call is a generator?
// Also - far, far too terse. Too terse. Amazingly terse.

var A = [1, [2, [3, 4], 5], 6];
for (var f of flat(A)) console.log( f );
