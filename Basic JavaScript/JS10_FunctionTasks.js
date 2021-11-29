// Function Task for Grade Calculation based on %.

function gradeCalculation(marks, totalMarks) {
    myPercentage = (marks / totalMarks) * 100;
    let myGrade = ""
    if (myPercentage >= 90) {
        myGrade = "A"
    }
    else if (myPercentage >= 75 && myPercentage < 90) {
        myGrade = "B+"
    }
    else if (myPercentage >= 50 && myPercentage < 75) {
        myGrade = "B"
    }
    else if (myPercentage >= 35 && myPercentage < 50) {
        myGrade = "C"
    }
    else {
        myGrade = "Failed"
    }
    return `Your Grade is ${myGrade} and your percentage is ${myPercentage}`
}

console.log(gradeCalculation(740,900));

