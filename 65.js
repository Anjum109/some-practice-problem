// =========================//=========================//=========================
// 65. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো.

var numbers = [1, 70, 75, 80, 12, 84, 102, 103];
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element < 80) {
        continue;
    }
    console.log(element);
}