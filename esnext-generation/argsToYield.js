'use strict';

module.exports = function *multiplier() {
  let value = 0;
  let multiplier = 1;

  while (true) {
    multiplier = (yield ++value * multiplier) || 1;
  }
}
