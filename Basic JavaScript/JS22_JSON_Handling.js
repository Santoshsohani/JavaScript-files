// JSON HANDLING IN JAVASCRIPT. *important*

const student = {
    name: "santosh",
    age: 20,
    email : "santoshsohani@gmail.com"
}

// conversion of JSON to STRING.

let stringStudent = JSON.stringify(student)
console.log(typeof stringStudent);
console.log(stringStudent);

// conversion of STRING to JSON.

let JSONStudent = JSON.parse(stringStudent)
console.log(typeof JSONStudent);
console.log(JSONStudent);