// 60) ত োমার যদি দইুটা শর্ত পূরণ করতে বলে । এবং দইুটা শর্তে র মধ্যে দইুটাই পূরণ করতে হবে ।
// তাহলে তুমি কি সে টা চে ক করতে পারবে ? একইভাবে যদি বলে তুমি দইুটা শর্তে র যে ক োন একটা
// পূরণ করতে পারবে । অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পার ো কি না। যদি পার ো তাহলে
// নি জে নি জে এই রকমে র ক োড লি খে ফে ল ো।


let conditionOne = 10;
let conditionTwo = 15;

if (conditionOne == 10 || conditionTwo == 11) { // Its print "Even" because It's should be only one condition true.
    console.log('Even');
}
else {
    console.log('Odd');
}

if (conditionOne == 10 && conditionTwo == 11) { // Its print "Odd" because It's should be both condition true.
    console.log('Even');
}
else {
    console.log('Odd');
}