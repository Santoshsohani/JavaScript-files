// Maps and ForOf loops in javascript.

var john = {
    name: "I am sam",
    age: 25,
    isActive:true,
}

var joseph = {
    name: "Joseph",
    age: 26,
    isActive:true,
}

var jonny = {
    name: "Jonny",
    age: 29,
    isActive:false,
}

var users = new Map()
// maps are itterables  users.set("name",value) ==> is used to get add the object in map
// users.get() is used to get the value in Map()


// users.set("DetailsJohn", john)
// users.set("DetailsJoseph", joseph)
// users.set("DetailsJonny", jonny)

// console.log(users.size);
// console.log(users);

// console.log(users.get("DetailsJohn"));
// console.log(users.keys());

// for (const value of users.values()) {
//     console.log(value.age);
// }

// for (let i = 0; i < 3; i++){
//     console.log();
// }

// for (const [key,value] of users.entries()) {
//     console.log(`key = ${key}  Value = ${value.name}`);
// }


const arrayOfarray = [["one", 1], ["two", 2]]

var ara = new Map()

ara.set("One", arrayOfarray[0])
ara.set("Two", arrayOfarray[1])

console.log(ara);

for (const [key,value] of ara.entries()) {
    console.log(`${key} : ${value}`);
}