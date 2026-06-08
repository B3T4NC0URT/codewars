let numbers = [ 6, 2, 1, 8, 10]
function sumArray(array) {
  return array.sort((a,b) => a - b).slice(1,-1).reduce((currentValue,previousValue) => currentValue + previousValue, 0)
}

console.log(sumArray(numbers))
