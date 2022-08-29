// Write a function called make_avg() which will take an three integers and return the average of those values.
function make_avg(num1, num2, num3) {
    var sum = num1 + num2 + num3;
    var avg = sum / 3;
    return avg;
}
var average = make_avg(50, 60, 70);
// average = average.toFixed(2);
console.log('The avarage is:', average);

