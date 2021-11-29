// inheritance.

class User {
    constructor(firstname, lastname, credit) {
        this.firstname = firstname
        this.lastname = lastname
        this.credit = credit
    }

    fullName() {
        return `${this.firstname} ${this.lastname} is my full name.`
    }

    editName(newName) {
        const anotherName = newName.split(" ")
        this.firstname = anotherName[0]
        this.lastname = anotherName[1]
    }

}

class Teacher extends User{
    constructor(firstname, lastname, credit, teaching) {
        super(firstname, lastname, credit);
        this.teaching = teaching
    }

    fullName() {
        return `My name is ${this.firstname} ${this.lastname} and i teach ${this.teaching} `
    }
}

const joseph = new Teacher("Joseph", "P", 38, "Physics")
console.log(joseph.fullName());

const john = new User("John", "Bellary", 36)
console.log(john.fullName());