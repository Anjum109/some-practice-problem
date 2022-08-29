// 28) Challenging: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function averageNumber(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    const avg = sum / numbers.length;
    return avg;
}
const numbers = [10, 20, 30, 40, 38];
console.log(averageNumber(numbers));







// function make_avg(numbers) {
//     var sum = numbers[0] + numbers[1] + numbers[2];
//     var avg = sum / 3;
//     return avg;
// }
// var average = make_avg([73, 60, 61]);
// average = average.toFixed(2);
// console.log('The average number is:', average)