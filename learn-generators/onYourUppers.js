'use strict';

function *upper (items) {
  for (let i of items) {
    try {
      yield i.toUpperCase();
    } catch (error) {
      yield null;
    }
  }
}

// Well, that's as short as it gets I guess...

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) console.log(item);
