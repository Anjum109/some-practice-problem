// 31) একটা ফাংশন লি খবা যে টা ১৩ এর নামত(multiplication table) আউটপুট হি সে বে দে খাবে ।
function namta(input) {
    for (var i = 1; i <= 10; i++) {
        var finalNamta = i * input;
        console.log(i, 'x', input, '=', i * input);
    }
    return finalNamta;
}
var result = namta(13);
