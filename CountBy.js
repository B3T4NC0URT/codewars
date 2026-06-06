function countBy(x, n) {
  let numbers = [];
  for(let i = 1; i<= n; i++){
    numbers.push(x * i)
    console.log(i)
  }
  return numbers
} 
console.log(countBy(2,10))
