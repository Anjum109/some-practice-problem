// 66. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 
function gunFol(num) {
    for (i = 1; i <= num; i++) {
        var mul = i * num;
    }
    return mul;
}
var result = gunFol(3);
console.log(result);