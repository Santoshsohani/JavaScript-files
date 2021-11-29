// Trello version 4

// findIndex() function takes a method or a function and then returns the value of index if exists.
// It works in the same way as forEach loop.

//searching an element in array of Objects.

const todoListForTrello = [
    {
        title: 'Workout',
        isDone: true,
    },
    {
        title: 'Javascript',
        isDone: false,
    },
    {
        title: 'Data structure',
        isDone: true,
    }
]


// let findIndex = todoList.findIndex((todo) => {
//     return todo.title.toLowerCase() === "javascript".toLowerCase()
// })

// console.log(findIndex);

// let findAnotherIndex = todoList.findIndex((todos) => {
//     return todos.title.toLowerCase() === "javascript".toLowerCase();
// })

// console.log(findAnotherIndex
// );

// Search for the todo in the array of Objects.

// function searchTodo(todoList, element) {
//     let indexOfElement = todoList.findIndex((todo) => {
//         return todo.title.toLowerCase() === element.toLowerCase();
//     })
//     return todoList[indexOfElement]
// }

// console.log(searchTodo(todoListForTrello, "jAvascript"));

// function findTodo(todoList, element) {
//     const todoReturned = todoList.find((todo) => {
//         return todo.title.toLowerCase() === element.toLowerCase();
//     })

//     return todoReturned
// }

// let printMe = findTodo(todoListForTrello, 'data structure');
// console.log(printMe);


// findIndex() --> this method takes an takes a call back function as parameter and returns the index of the element that is to be found.

// find() --> this method takes a call back function as parameter and returns the element that is to be found.

// These both can be applied on the array of objects.

function findTodoList(todoList, element) {
    const toFindElement = todoList.find((todo) => {
        return todo.title.toLowerCase() === element.toLowerCase();
    })
    return toFindElement;
}

console.log(findTodoList(todoListForTrello,"Data structure"));