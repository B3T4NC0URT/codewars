let numeros = [19, 5, 42, 2, 77];

function sumTwoSmallestNumbers(numbers) {  
  if(!numbers || numbers.length === 0) return []
  let sortedNumbers = numbers.sort((a,b) => a - b);
  let sum =  numbers[0] + numbers[1];
  return sum
};
console.log(sumTwoSmallestNumbers(numeros))