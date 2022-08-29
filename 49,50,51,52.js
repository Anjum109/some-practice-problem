// 49,50,51,52 একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।  

//Using PARAMETAR & Math.min Function.

// function smallFromThreeNumbers(n1, n2, n3) {
//     var small = Math.min(n1, n2, n3);
//     console.log(small);
// }
// smallFromThreeNumbers(-22, 44, -999);

// Using PARAMETAR & IF/ElSE

// function smallFromThreeNumbers(n1, n2, n3) {
//     if (n1 < n2 && n1 < n3) {
//         console.log(n1, 'is Smallest Number');
//     }
//     else if (n2 < n1 && n2 < n3) {
//         console.log(n2, 'is Smallest Number');
//     }
//     else {
//         console.log(n3, 'is Smallest Number');
//     }
// }
// smallFromThreeNumbers(-22, 44, -999);


// Using ARRAY & Math.min Function

// function smallestNumber(input) {
//     for (i = 0; i < input.length; i++) {
//         var smallN = Math.min(input[i]);
//     }
//     return smallN;
// }
// var numbers = [1, 2, 4, -1, 0, -99];
// var result = smallestNumber(numbers);
// console.log(result);


// Using ARRAY & IF/ELSE Function

// function smallestNumber(input) {
//     var defaultSmallNumber = input[0];
//     for (i = 0; i < input.length; i++) {
//         if (input[i] < defaultSmallNumber) {
//             defaultSmallNumber = input[i];
//         }
//     }
//     return defaultSmallNumber;
// }
// var numbers = [33, 22, 12, 0, -89, -90];
// var result = smallestNumber(numbers);
// console.log(result);