// try and catch in javascript.

// Currency Converter.

function rupeeConverter(money) {
    if (typeof money === "number") {
        return money*64
    }
    else {
        console.log("Money should be in Rupees");
    }
}

// The above function throws a error and stops the entire Program. To avoid this use "tryCatch "

try {
    console.log(rupeeConverter("fibe"));
} catch (error) {
    console.log(error);
}

console.log("I will aslo execute if the error occurs and do not terminate the Program!!");


