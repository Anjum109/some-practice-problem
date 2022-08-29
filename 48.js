// 48 একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 

function smallNumber(input) {
    let defaultSmallNumber = input[0];
    for (i = 0; i < input.length; i++) {
        if (input[i] < defaultSmallNumber) {
            defaultSmallNumber = input[i];
        }
    }
    return defaultSmallNumber;
}
var numbers = [0, 333, 11, 33, 2, -1, -3];
var result = smallNumber(numbers)
console.log(result);