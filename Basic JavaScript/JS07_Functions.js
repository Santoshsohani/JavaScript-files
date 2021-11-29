// Functions in JS

 function sayHello(name) {
        console.log(`Hey ${name} welcome to a day in Your life
A app made with love for developers community`);
};

function fullNameMaker(firstName, lastName) {
    console.log(`Welcome to your Own world ${firstName} ${lastName}`);
}

function addition(num1, num2) {
    return num1 + num2;
}
sayHello("Santosh");
console.log(addition(5,6));
fullNameMaker("Santosh", "Sohani");

// Default parameters in a function.

function collegeName(name = "Person", collegeName = "Govt clg") {
    console.log(`Hey ${name} how is your college ${collegeName}`);
}
// If the parameters is not passed to a function then the default parameter will be used instead of undefined.
collegeName()
collegeName("Santosh", "JCET")


