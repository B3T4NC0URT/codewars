function sum(numbers){
  let total =numbers.reduce((acumulator, currentValue) => acumulator + currentValue, 0)
  return total
}
const numeros = [20,40,30,-5,-30]
console.log(sum(numeros))