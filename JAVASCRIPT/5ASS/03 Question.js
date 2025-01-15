


function characterClasses(str) {
    // Define regex patterns here ...
    const digitPattern = /\d/g;
    const uppercasePattern = /[A-Z]/g;
    const lowercasePattern = /[a-z]/g;
    const specialCharsPattern = /[^a-zA-Z0-9\s]/g;

    // Find matches for each pattern
    const digits = str.match(digitPattern) || [];
    const uppercaseLetters = str.match(uppercasePattern) || [];
    const lowercaseLetters = str.match(lowercasePattern) || [];
    const specialChars = str.match(specialCharsPattern) || [];

    // Return matches
    return {
        digits,
        uppercaseLetters,
        lowercaseLetters,
        specialChars
    };
}

let str = "Hello, There! 12345 @#$%^&*()";

let matches = characterClasses(str);
console.log("Digits:", matches.digits); 
// Output: ["1", "2", "3", "4", "5"]

console.log("Uppercase Letters:", matches.uppercaseLetters); 
// Output: ["H", "T"]

console.log("Lowercase Letters:", matches.lowercaseLetters); 
// Output: Lowercase Letters: ['e', 'l', 'l','o', 'h', 'e','r', 'e']

console.log("Special Characters:", matches.specialChars); 
// Output: [",", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
