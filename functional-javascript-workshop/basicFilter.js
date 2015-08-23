function lessThan50characters (array) {
  return array.map(function (object) { return object.message })
    .filter(function (message) { return message.length < 50 })
}

module.exports = lessThan50characters