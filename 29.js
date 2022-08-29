// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways:
// ● Has return + Has parameter
// ● No return + Has parameter


// ● Has return + Has parameter
function odd_even(integer) {
    if (integer % 2 == 0) {
        console.log("Even")
        return integer;
    }
    else {
        console.log("Odd")
    }
}
var result = odd_even(100);

// ● No return + Has parameter
function odd_even(integer) {
    if (integer % 2 == 0) {
        console.log("Even")
    }
    else {
        console.log("Odd")
    }
}