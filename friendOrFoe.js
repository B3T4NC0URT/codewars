let input = ["Ryan", "Kieran", "Jason", "Yous"];
function friend(friends){
  let ouput = [];
  friends.forEach(value => {
    if(value.length == 4){
      ouput.push(value)
    }
  })
  return ouput
}
console.log(friend(input))