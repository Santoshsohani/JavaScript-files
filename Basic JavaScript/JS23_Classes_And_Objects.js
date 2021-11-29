// classes and objects.

class User{
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

const santosh = new User("santosh", "sohani", 35)
console.log(santosh.fullName());
santosh.editName("santosh prakash")
console.log(santosh.fullName());



