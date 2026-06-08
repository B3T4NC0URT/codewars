let input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
function openOrSenior(data){
  let output = [];
  if(!data || data.length == 0) return []
  data.forEach(values => {
    let value = values;
    if(value[0] >= 55 && value[1] > 7){
      output.push("Senior")
    }else(
      output.push("Open")
    )
  })
  return output
};
console.log(openOrSenior(input))