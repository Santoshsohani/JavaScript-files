// const and let

// let keyword in ES6 is only can be used in local scope.

// score = 100
// if (true) {
//     let score = 80
//     console.log(score + " Inside a if statement");
// }

// console.log(score); // Here it throws an error.

// const is a keyWord used to define the variable having a constant value.

const sayHello = (name) => { return `Hello ${name}` }

console.log(sayHello("santosh"));