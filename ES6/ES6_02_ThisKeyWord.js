// this key-word in ES6.

function crazy() {
    console.log(this);
}

crazy()

// when thsis  keyword is called it is always refrered as window object.

// but if you give the refrence of the function to the button then the refrence is given to HTMLButton object.

// if we use arrow function to reference for button then refrence is not changed it remains window object.

