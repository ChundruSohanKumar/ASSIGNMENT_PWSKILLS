function curry(fn){  // function that returning a curried function
    return function curried(...val){   // curried function return a original function arguments
        if (val.length == fn.length){
            return fn(...val)
        }
    }
}

function addTwoNum(a,b){
    return a+b
}

const passedFunc = curry(addTwoNum)

let result = passedFunc(5,10)
console.log(result)