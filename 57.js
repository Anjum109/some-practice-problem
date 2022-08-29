// 57. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো।


// Correct WAY

function isPrime(num) {
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
var result = isPrime(18);
console.log(result);

//Find Prime Number Using Function,Parametar and loop.
// function isPrime(input) {
//     for (i = 1; i <= input; i++) {
//         if (i === 1) {
//             console.log(i, 'Not Prime');
//         }
//         else if (i === 2 || i == 3) {
//             console.log(i, 'Prime');
//         }
//         else if (i % 2 == 0 || i % 3 === 0) {
//             console.log(i, 'Not Prime');
//         }
//         else {
//             console.log(i, 'Prime');
//         }
//     }
// }
// isPrime(25);



//Find Prime Number Using Function and Parametar.
function isPrimetwo(i) {
    if (i === 1) {
        console.log(i, 'Not Prime');
    }
    else if (i === 2) {
        console.log(i, 'Prime');
    }
    else if (i % 2 == 0) {
        console.log(i, 'Not Prime');
    }
    else {
        console.log(i, 'Prime');
    }
}
isPrimetwo(9);