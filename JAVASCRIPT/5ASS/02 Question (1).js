// Q2. Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function
// that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test
// the function with various patterns and strings.


function Matching(pattern, str) {
    // this is an object which is use to match text and pattern
    let regex = new RegExp(pattern);
    return regex.test(str);
}


console.log(Matching("hello", "hello world")); // true
console.log(Matching("^hello", "hello world")); // true
console.log(Matching("world$", "hello world!")); // false
