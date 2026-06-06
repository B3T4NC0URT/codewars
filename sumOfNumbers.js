function getSum(a, b){
  let total = 0; 
  if(a == b){
    return a;
  }else if(b  > a){
    for(let i = a; i <= b; i++){
      total += i
    }
  }else if(a > b){
    for(let i = b; i <= a; i++){
      total += i
    }
  }
  return total < -1 && a <= -1 && b <= -1 ? 0 : total 
}
console.log(getSum(-283,10))

