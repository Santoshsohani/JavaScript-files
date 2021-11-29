// UserName and passWord checking in javascript. (WebChecking)

let userName = "1234567"
let userEmail = 'santoshsohani16@gmail.com';
let passWord = '123456'

console.log(userEmail.length);
console.log(userEmail.toLowerCase());
console.log(userEmail.toUpperCase());
console.log(userEmail.trim());  // Removes whitespace from both the end of the string.

function checkUserName(name) {
    if ((name.includes(123)) && (name.length > 6)) {
        return true;
    }

    return false;
}

console.log(checkUserName(userName));