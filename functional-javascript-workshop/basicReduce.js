function numberOfOccurences (array) {
  return array.reduce(function (memo, string) {
    memo[string] = ++memo[string] || 1
    return memo
  }, {})
}

module.exports = numberOfOccurences