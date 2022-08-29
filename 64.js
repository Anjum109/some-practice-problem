// 64. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 

var array = [1, 2, 4, 5, 61, 12, 31];
// for Loop
for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// for Of Loop.
for (var i of array) {
    console.log(i);
}