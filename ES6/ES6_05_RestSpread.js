// Rest and Spread operator in Js.

// ... opeartor can convert a list to any array and also viceVersa.


let depositMoney = (...money) => {
    let balance = 0

    for (let i = 0; i < money.length; i++){
        balance = balance + money[i]
    }

    return balance
}

console.log(depositMoney(10, 20, 30, 0, 50));

// here the input 10,20,30,0,50 is converted into an array.

let array = [10, 20, 30, 40, 50]

console.log(...array);

// array is converted into an list.
