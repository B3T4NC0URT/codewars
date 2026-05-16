function getCount(str) {
let counter = 0;

for (let i = 0; i < str.length; i++){
  let validacion = str.charAt(i).match(/[aeiou]/)
  if(validacion){
    counter++
  }
} 
return counter
}
console.log(getCount("hol"))