function rentalCarCost(d) {
  const dailyCost = 40;
  
  if(d >= 7){
    return (dailyCost * d) - 50 
  }else if(d >= 3){
    return (dailyCost * d) -20
  }else{
    return(dailyCost * d)
  }
};
console.log(rentalCarCost(4));