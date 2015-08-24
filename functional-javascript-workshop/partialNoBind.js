function decorateLog (decorater) {
  return function decoratedLog () {
    var args = [decorater].concat(Array.prototype.slice.call(arguments))
    console.log.apply(null, args)
  }
}

module.exports = decorateLog