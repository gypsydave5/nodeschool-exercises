'use strict';

module.exports = isEven => {
  let value = isEven ? 0 : -1;
  return {
    next: swap => ({ value: value += (swap ? 1 : 2) })
  }
}

// infinite iterable filter

module.exports = (intIterable, isEven = true) => {
  if (!isEven) intIterable.next();
  return {
    next: swap => ({
      value: (swap ? intIterable.next().value
                   : intIterable.next().next().value )
    })
  }
}
