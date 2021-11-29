// DataTypes ===> Array
// Arrays are the dataTypes used to store data of same data types but in javascript an array can consist of more than one type.

const superHeros = ["Iron Man", "Spider Man", "Super Man", "Captian America"];

// Another way of declartion.
const friendsCharacters = new Array("Monica","Ross","Chandler","Rachel","Pheobe","Joe");

console.log(`We have ${superHeros.length} Super Heroes
    1.${superHeros[0]}
    2.${superHeros[1]}
    3.${superHeros[2]}
    4.${superHeros[3]}`);

// The Method used to print values using `` (backTicks) and ${} is called as Strig literals.

// Array Methods 

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers.shift());
// Shift() method removes a[0] element and returns it.

numbers.unshift(25)
console.log(numbers);
// Unshift() method adds a new element at a[0] and returns the new length

console.log(numbers.pop());
// Deletes the last element from the array and returns it.

console.log(numbers.push(256));
console.log(numbers);
// Push method adds element at last position and returns the new length.

numbers.splice(2, 1, "Splice");
console.log(numbers);
// splice() method takes 3 parameters from what index to start the deletion and where to end also what to add at the position.
// Eg : Here index two is deleted and replaced by "Splice".