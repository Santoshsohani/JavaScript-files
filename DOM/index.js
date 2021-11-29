let form = document.querySelector(".signup")
const array = []
form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(event.target.username.value);
    console.log(event.target.email.value);

    array.push(event.target.username.value)
    array.push(event.target.email.value)

    if (event.target.password.value != event.target.repeatPassword.value) {
        alert("Enter the correct password")
    } else {
        array.push(event.target.password.value)
    }
    console.log(array);
})