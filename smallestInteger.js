const values = [34, 15, 88, 2]
function findSmallestInt(arr) {
  if(!arr || arr.length === 0) return []
  const value =  arr.sort((a,b) => a - b);
  return value[0]
}
console.log(findSmallestInt(values));
