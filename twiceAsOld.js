function twiceAsOld(dadYearsOld, sonYearsOld) {
  // the multiplication of 2 is because of we want to know which would be the double of the son age, to calc how many time left the father is to double of son age or whow much time ago the father has the double of his son age.
  let time = sonYearsOld * 2 - dadYearsOld
  if(time < 0){
    return time * -1
  };
  return time
};

console.log(twiceAsOld(36,7))
