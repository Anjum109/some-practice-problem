var bookLists = [200, 240, 100, 90, 78, 290, 120];
for (var i = 0; i < bookLists.length; i++) {
    var bookList = bookLists[i];
    if (bookList > 200) {
        continue;
    }
    console.log(bookList);
}
// var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];
// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     if (number > 50) {
//         continue;
//     }
//     console.log(number);
// }