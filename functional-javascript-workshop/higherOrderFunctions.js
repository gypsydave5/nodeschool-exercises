function repeatMe (fun, num) {
  if (num === 0) return
  fun();
  repeatMe(fun, num - 1);
}

module.exports = repeatMe;