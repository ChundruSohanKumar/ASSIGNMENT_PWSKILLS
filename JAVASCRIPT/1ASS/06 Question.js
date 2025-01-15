function calculateBMI(weight, height){
    return (weight/(height*height))
}
// weight in kg and height in meter

let weight = 80;
let height = 1.8;

let result = calculateBMI(weight,height)

console.log(`your BMI is ${result}`)