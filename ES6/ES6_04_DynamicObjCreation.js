// dynamic object creation.
// using dynamic object creation one can use global variables 

let wrath = "angry"

const myObj = {
    userName: "Santosh",
    score: 10,
    angry : 99,
    fullName: (lastName) => {
        return `Your full name is ${myObj.userName} ${lastName}`
    }
}

console.log(myObj[wrath]);

// by using [] as an array.