function Factorial(num){
    let result = 0;
    let checked = "please enter valid value";
    if (num == 0){
        return 1;
    }
    if (num > 0){
        result = num * Factorial(num-1)
        return result
    }else{
        return checked;
    }  
}

console.log(Factorial(-5))  // please enter valid value
console.log(Factorial(5))   // 120 