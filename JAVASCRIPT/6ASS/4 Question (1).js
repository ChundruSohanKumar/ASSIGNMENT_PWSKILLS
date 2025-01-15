

const student = [
    {id:1, firstName:"John", lastName:"Doe", age:20, grade:"A"},
    {id:2, firstName:"Jane", lastName:"Smith", age:22, grade:"B"},
    {id:3, firstName:"Bob", lastName:"Johnson", age:19, grade:"A"},
    {id:4, firstName:"Aditya", lastName:"Bhojane", age:23, grade:"A"},
]

function addStudent(name,lastName,age,grade){
    let newId = student[student.length-1].id
    newId++;
    student.push({id:newId, firstName:`${name}`, lastName:`${lastName}`, age:age, grade:`${grade}`})
}
// this is how we can add students
addStudent('sanket','singh',22,"A+")
// console.log(student) // {id: 5,firstName: 'sanket',lastName: 'singh',age: 22,grade: 'C'}


function updateStudent(givenId,obj){
    let objIndex;
    for (let i = 0; i < student.length; i++) {
        if(student[i].id == givenId){
            objIndex = i
            break;
        }
    }
    if (objIndex !== undefined) {
        for (const key in obj) {
                student[objIndex][key] = obj[key];
        }
    } else {
        console.log("Student with given ID not found.");
    }
}


updateStudent(2,{lastName:'google',age:25})
// console.log(student) //   { id: 2, firstName: 'Jane', lastName: 'google', age: 25, grade: 'B' },

function deleteStudent(idx){
    student.splice(idx,1)
}

deleteStudent(2)

// console.log(student) // 3rd object removed

function displayInfo(){
    for (let i = 0; i < student.length; i++) {
        console.log(`full name ${student[i].firstName}, ${student[i].lastName} age ${student[i].age} and grade is ${student[i].grade}`)
    }
}

displayInfo()