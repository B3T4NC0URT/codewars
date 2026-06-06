function maps(x){
  let double =[];
  x.forEach(value => {
    value *= 2
    double.push(value);
  });
  return double
};
let numbers = [2,4,5,7,8,9]

console.log(maps(numbers))