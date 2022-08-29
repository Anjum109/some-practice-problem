// 5৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 
function aytokhetro(length, height) {
    var area = length * height;
    return area;
}
let l = 20;
let h = 20;
var result = aytokhetro(l, h);
console.log(result);