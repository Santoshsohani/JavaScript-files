// Trello TODO list.

let myTodoList = {
    day: "Monday",
    meetings: 0,
    meetingsDone: 0,
};

function addMeeting(todo,number = 0) {
    todo.meetings = todo.meetings + number;
}

function meetingsDone(todo,number = 0) {
    todo.meetings = todo.meetings - number;
}

function resetDay() {
    todo.meetings = 0;
    todo.meetings = 0;
}

function letGetSummaryOfDay(todo) {
    let meetingsLeft = todo.meetings - todo.meetingsDone;
    return `You have ${meetingsLeft} left Today!!`
}

addMeeting(myTodoList, 6);
meetingsDone(myTodoList, 6);
console.log(letGetSummaryOfDay(myTodoList));