module.exports = (...numbers) => {
  return (numbers.reduce((memo, num) => memo + num) / numbers.length)
}
