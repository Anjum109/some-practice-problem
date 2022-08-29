// 47. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো।


// Simple Interest:
// Formula: SI = (P * T * R) / 100

function simpleInterest(p, t, r) {
    var si = (p * t * r) / 100;
    return si;
}
var principleAmount = 4000;
var interestTime = 2;
var rate = 7;
var simpleInterestIs = simpleInterest(principleAmount, interestTime, rate);
console.log(simpleInterestIs);