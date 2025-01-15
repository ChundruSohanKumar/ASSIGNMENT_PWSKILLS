// A

let student = {
    name: "aditya",
    age: 23,
};

Object.preventExtensions(student);

// B
let extensibleStatus = Object.isExtensible(student);

// C
let teacher = {
    subject: "Math"
};

// D
Object.seal(teacher);

// E
let sealedStatus = Object.isSealed(teacher);

// F
console.log("Is the student object extensible?", extensibleStatus); // Output: false
console.log("Is the teacher object sealed?", sealedStatus); // Output: true
