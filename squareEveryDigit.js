function squareDigits(num){
  return Number(num.toString().split('').map(value => value ** 2).join(''))
}
console.log(squareDigits(3212))