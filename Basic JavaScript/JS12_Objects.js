// Objects in Javascript.

// let youtubeObject = {
//     title: "Loops in JavaScript",
//     videoLength: 15,
//     videoDescription: "This is a video about Loops in JavaScript",
// }

// Assignment

let courseContent = {
    title: "Backend with Node.js",
    author: "Hitesh Choudary",
    price: "15$",
}

// console.log(`There is course on ${courseContent.title} by ${courseContent.author} with price of ${courseContent.price}`);

// Fuctions that takes Objects and returns Objects.

let youtubeObject = {
    title: "Loops in JavaScript",
    videoLength: 15,
    videoDescription: "This is a video about Loops in JavaScript",
}

function changeVideoLength(myObj) {
    return {
        formatOne: `The Length of the video is ${myObj.videoLength + 2} minutes`,
        formatTwo: `The Length of the video is ${myObj.videoLength + 5} minutes`,
    }
}

let adone = changeVideoLength(youtubeObject);

console.log(adone.formatOne);
console.log(adone.formatTwo);