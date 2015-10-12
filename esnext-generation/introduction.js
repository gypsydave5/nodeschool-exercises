"use strict";

function makeCounter(someObj) {
  let i = 0;
  let done = false;

  someObj.next = () => {
    i < 10 ? i++ : done = true;
    return {
      value: i,
      done: done
    }
  }
}


module.exports = makeCounter;
