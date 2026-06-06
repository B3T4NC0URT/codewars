function getMiddle(s) {
  let textLength = s.length;
  let middle = Math.ceil((textLength / 2) - 1)

  if(textLength % 2 === 0){
    return (s.charAt(middle) + s.charAt(middle + 1))   
  }else{
    return s.charAt(middle)
  }
}
console.log(getMiddle("testing"))