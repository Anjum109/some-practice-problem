// 55 (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 

function largestNumber(array) {
    var largestNumber = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] > largestNumber) {
            largestNumber = array[i];
        }
    }
    var secondLargestNumber = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] > secondLargestNumber && array[i] < largestNumber) {
            secondLargestNumber = array[i];
        }
    }
    return secondLargestNumber;
}
var numbers = [33, 11, 1, 0, 90];
var result = largestNumber(numbers);
console.log(result);