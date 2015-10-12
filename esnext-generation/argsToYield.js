'use strict';

module.exports = function *multiplier() {
  let value = 1;
  let multiplier = 1;

  while (true) {
    multiplier = (yield value * multiplier) || 1;
    value++;
  }
}
