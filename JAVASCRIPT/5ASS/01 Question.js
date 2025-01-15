// Q1. Write a JavaScript function called outerFunction that takes a parameter and returns an inner function.
// The inner function should access both the parameter of outerFunction and a variable declared within
// outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these
// variables even after outerFunction has finished executing.

function outerFun(para1,para2){
    // variable indie the outer function 
    let val = 'outer variable';
    return function innerFun(){
        console.log(para1,para2,val)
    }
}
const result  = outerFun("parameterOne","parameterTwo")

result()

/* this is the concept of closure in javascript its has a capability to access a values even execution of the 
   outer function is done its like inner function remember its environment in which it was created */