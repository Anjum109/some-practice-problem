// 45. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 

// Formula = (32°F − 32) × 5/9 = °C

function farToCel(input) {
    var far = (input - 32) * 5 / 9;
    return far;
}
var farInput = 89.6;
var celcius = farToCel(farInput);
console.log(celcius);