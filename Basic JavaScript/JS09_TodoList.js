const myTodos = [];

myTodos.push("Buy bread");
myTodos.push("Record videos for Youtube")
myTodos.push("Workout");

myTodos.forEach((todos,index) => {
    console.log(`${++index}.${todos}`);
});

console.log();

// Another example to create Todo lists using forloops and unshift() method.

const myTodoList = []

myTodoList.unshift("Buy Breadcrumb");
myTodoList.unshift("Record videos for Youtube")
myTodoList.unshift("Workout");

// Display

for (let i = 0; i < myTodoList.length; i++) {
    console.log(`${i+1}. ${myTodoList[i]}`); 
}