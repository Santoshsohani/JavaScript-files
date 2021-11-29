// Coercion in Javascript.
// Predicting nature of javaScript is called Coercion.

// TRUE is considered as one (1) in javaScript and FALSE as zero

// typeOf gives the dataType of that variable.
// Eg : 
// const giveType = typeof 5
// console.log(giveType);
// returns string.

const loginDetails = []

// Login details are returned in the form of array by dataBase.
// login details consist of loginID userName and emailID
// Logic for getting details DBMS
// if any of the loginDetails is not been returned then else statement executes.

const loginId = loginDetails[0]

if (loginId != undefined) {
    console.log("Allow user to login..");
} else {
    console.log("Auth failed!!");
}

// Values that interpreted as false : 0,false,null,undefined and "" (empty string) and others are true.
 