// 33) fullName নামে একটা ফাংশন তৈ রী কর যে টা ত োমার নামে র প্রথম অংশ এবং ত োমার
// নামে র শে ষে র অংশ প্যারামি টার হি সে বে নি বে । আর ত োমার নামে র দইু অংশ জ োড়া দি য়ে আউটপুট
// হি সে বে ত োমার পূর্ন নাম রি টার্ন করে দি বে । যে মন ধর ো, hablu এবং kanto ইনপুট প্যারামি টার
// হি সে বে দি লে আউটপুট হি সে বে hablu kanto রি টার্ন করবে ।

function fullName(fname, lname) {
    var name = fname + ' ' + lname;
    return name;
}
var firstValue = 'Hablu';
var lastValue = 'kantu';
var fullNameIs = fullName(firstValue, lastValue);
console.log(fullNameIs);