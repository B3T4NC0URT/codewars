let numbers  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, -11, -12, -13, -14, -15];
let number = [0,0,0,0,0,-12,-17,-27];
function countPositivesSumNegatives(input) {
  let result = [];
  let amountNumbers = 0 
  let sumNumber = 0
  
  if(!input || input.length === 0) return []

  for(const n of input){
    n > 0 ? amountNumbers++ : sumNumber += n; 
  }
  result.push(amountNumbers, sumNumber);
  return result[0] === 0 && result[1] === 0 ? [] : result 
} 



/* function countPositivesSumNegatives(input) {
  let result = [];
  let amountNumbers = 0 
  let sumNumber = 0
  
  for(let i = 0; i < input.length; i++){
    input[i]> 0 ? amountNumbers++ : sumNumber += input[i]; 
  }
  result.push(amountNumbers, sumNumber);
  return result[0] === 0 && result[1] === 0 ? [] : result 
}
 */
console.log(countPositivesSumNegatives(numbers));