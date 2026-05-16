function sortSingleNumber(n){
  let operation = Number(n.toString().split('').sort((a,b) => b - a).join(''))
  return operation
}
console.log(sortSingleNumber(145263))