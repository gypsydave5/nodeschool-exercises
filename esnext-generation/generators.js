'use strict';

module.exports = function *generate (isEven) {
  let value = isEven ? 0 : -1;
  while (true) yield value += 2;
}
