// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

function upperCaseToLowerCaseConveter(input) {
    var result = input.toLowerCase();
    return result;
}
var text = 'Test'
var finalResult = upperCaseToLowerCaseConveter(text);
console.log(finalResult);