// Loops in Javascript.

// forEach loop in JavaScript

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

days.forEach((element, index) =>   {
    console.log(`${++index}.${element}`); 
});
console.log();

// For Loops
for (let i = days.length - 1; i >= 0; i--){
    console.log(days[i]);
}