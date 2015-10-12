'use strict';

module.exports = isEven => {
  let value = isEven ? 0 : -1;
  return {
    next: swap => ({ value: value += (swap ? 1 : 2) })
  }
}
