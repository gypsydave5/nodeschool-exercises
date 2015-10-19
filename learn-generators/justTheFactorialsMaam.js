'use strict';

function *factorial (n) {
  let num = 1, val = 1;
  while (num <= n) yield val *= num++;
}

// I probably wouldn't do that in production - but... so terse!

for (var n of factorial(5)) console.log(n)
