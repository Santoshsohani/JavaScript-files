// Arrow functions in Javascript () => {}
    
// let sayHello = (name) =>  { return`Hello ${name} welcome to JCET`}


// console.log(sayHello("Santosh"));

// if you want to use { } then use return keyword.

const todoListForTrello = [
    {
        title: 'Workout',
        isDone: false,
    },
    {
        title: 'Javascript',
        isDone: true,
    },
    {
        title: 'Data structure',
        isDone: false,
    },
    {
        title: 'Netflix',
        isDone : true,
    },
    {
        title: 'IPL',
        isDone : false,
    },
]

let thingsDone = todoListForTrello.filter((todos) => {
    if (todos.isDone === true) {
      return todos.title
  }
})

console.log(thingsDone);


let thingsNotDone = todoListForTrello.filter((todos) => {
    if (todos.isDone === false) {
        return todos.title
    }
})

console.log(thingsNotDone);


console.log(todoListForTrello.filter((todo) => {
    if (todo.isDone === true) {
        return todo.title
    }
}));