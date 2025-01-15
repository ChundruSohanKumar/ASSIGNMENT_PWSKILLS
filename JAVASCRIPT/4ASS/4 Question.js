function calculateTax(){
   const rates = [
    { range:250000, rate:(5/100)},
    { range:500000, rate:(5/100)},
    { range:1000000, rate:(5/100)},
   ]
   return function (income){
       let tax = 0;
       for (const {range,rate} of rates) {
           if (income >= range){
               tax += income * rate;
               break;
            }else{ 
                tax = 0;
            }
        }
        let totalTax = `total taxable income is ${tax}`
        return totalTax
   }
}

let totalTax = calculateTax()

console.log(totalTax(25000))       // total taxable income is 0
console.log(totalTax(250000))      // total taxable income is 12500
console.log(totalTax(500000))      // total taxable income is 25000
console.log(totalTax(3500000))     // total taxable income is 175000
