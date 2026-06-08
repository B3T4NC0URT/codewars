function accum(s) {
let value = s.split('');
let result = [];
for(let i = 0; i < s.length; i++){
  let upper = value[i].toUpperCase();
  let lower = value[i].toLowerCase().repeat(i)
  
  result.push(upper+lower)
}
return result.join('-')
}; 
console.log(accum("hola"))

