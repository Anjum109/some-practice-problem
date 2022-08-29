// 59) তুমি কি দইুটা ভে রি য়ে বল এরমধ্যে তুলনা করতে পার ো। কম্পারি জন করতে পার ো। যে দইুটা
// ভে রি য়ে বল এর মধ্যে প্রথমটা সে কে ন্ডটা এর চাইতে ছ োট, বড়, অসমান, সমান , ছ োট বা সমান,
// বড় বা সমান। এইগুলা চে ক করতে পার ো। অর্থাৎ <, >, ==, !=, <=, >= চি হ্নগুলা ব্যবহার করতে
// পার ো। তাহলে দইুটা সংখ্যা টাইপে র ভে রি য়ে বল ডি ক্লে য়ার করে তাদে রকে এই ছয়ভাবে তুলনা করে
// ক োড লি খে ফে ল ো।

let num1 = 10;
let num2 = 20;

// Smaller Than, Greated Than
if (num1 < num2) {
    console.log(num1, 'is smaller than:', num2);
}
else {
    console.log(num2, 'is smaller than:', num1);
}

// Not Equal
if (num1 != num2) {
    console.log('Osoman');
}
else {
    console.log('Soman');
}

// Equal
if (num1 == num2) {
    console.log('Soman');
}
else {
    console.log('Osoman');
}

// Less Than Equal
if (num1 <= num2) {
    console.log('Less Than Equal');
}
else {
    console.log('Greated Than');
}

// Greater Than Equal
if (num1 >= num2) {
    console.log('Greater Than Equal');
}
else {
    console.log('Less Than');
}
