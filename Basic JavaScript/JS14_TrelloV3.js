// Trello Version 3.0

let myTodoList = {
    day: "Monday",
    meetings: 0,
    meetingsDone: 0,

    addMeetings: function (number = 0) {
        this.meetings = this.meetings + number;
    },

    meetingsDone: function (num = 0) {
        this.meetingsDone = num;
    },

    daySummary: function () {
        return `You have left with ${this.meetings - this.meetingsDone} meetings today!!`;
    },

    resetMode: function () {
        this.meetings = 0;
        this.meetingsDone = 0;
    }
};


myTodoList.addMeetings(6);
myTodoList.meetingsDone(4);

console.log(myTodoList.daySummary());

myTodoList.resetMode();

console.log(myTodoList);

