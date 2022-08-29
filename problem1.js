// 1 no problem answer: 

function radianToDegree(radian) {
    const pi = 3.1416;
    const degree = radian * (180 / pi);
    if (typeof radians !== "number") {
        return 'Wrong! Enter a valid number'
    }
    else {
        return degree.toFixed(2);
    }
}
var radians = 10;
var degrees = radianToDegree(radians);
console.log(degrees);