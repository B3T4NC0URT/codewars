/* function gePoints(games){
  let puntos = 0;
  for (valor of games){
    valor.split('').map(number => number[0] )
  }
} */

let juegos = ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]
let total = 0;

juegos.forEach(puntuacion => {

const [home, away] = puntuacion.split(":");

if(home > away){
  total+=3 
}else if(home < away){
  total+= 0;
}else if(home == away){
  total+= 1;
}
return total
})
console.log(total)


