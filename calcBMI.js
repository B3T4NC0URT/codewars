function bmi(weight, height) {
  height *= height 
  let bmi = weight / height

if (bmi <= 18.5) return "Underweight"
if (bmi <= 25.0) return "Normal"
if (bmi <= 30.0) return "Overweight"
if (bmi > 30) return "Obese"

}
console.log(bmi(92,1.8))

