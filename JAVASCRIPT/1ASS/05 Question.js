function interest(principle, rate, time){
    return ((principle * rate * time)/100)
}
let amount = 1100;
let rate = 3;
let time = 2;

let interestValue = interest(amount,rate,time)

console.log(interestValue)