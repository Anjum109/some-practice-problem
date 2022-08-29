// ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 

//Formula: (0°C × 9/5) + 32 = 32°F

// function celToFar(input) {
//     var cel = (input * 9 / 5) + 32;
//     return cel;
// }
// var celcius = 32;
// var frn = celToFar(celcius);
// console.log(frn);

function radianToDegree(radian) {
    const pi = 3.1416;
    const degree = radian * (180 / pi);
    return degree;
}
var radians = 10;
var degrees = radianToDegree(radians);
console.log(degrees.toFixed(2));