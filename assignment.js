// 1 no problem answer: 

function radianToDegree(radian) {
    const pi = 3.1416;
    const degree = radian * (180 / pi);
    if (typeof radians !== "number") {
        return 'Wrong! Enter a valid number'
    }
    else {
        return degree.toFixed(2);
    }
}
var radians = 10;
var degrees = radianToDegree(radians);
console.log(degrees);

//--------------------------//

// 2 no problem answer: --------//
function isJavaScriptFile(fileName) {


    if (typeof fileName !== "string") {
        return 'Wrong! Enter a valid string';
    }
    else if (fileName.endsWith('.js')) {
        return true;
    }

    else {
        return false;
    }
}
const fileName = 'js.png';
console.log(isJavaScriptFile(fileName));

//--------------------//

// 3no Problem answer ---// 

function oilPrice(diesel, petrol, octane) {
    let dieselPrice = 114 * dieselQuantity;
    let petrolPrice = 130 * petrolQuantity;
    let octanePrice = 135 * octaneQuantity;
    let totalPrice = dieselPrice + petrolPrice + octanePrice;
    if (typeof dieselQuantity !== "number" || typeof petrolQuantity !== "number" || typeof octaneQuantity !== "number") {
        return 'Wrong! Enter a valid number'
    }
    else {
        return totalPrice;
    }
}
let dieselQuantity = 1;
let petrolQuantity = 1;
let octaneQuantity = 1;
var result = oilPrice(dieselQuantity, petrolQuantity, octaneQuantity);
console.log(result);

//-------------------------//

// 4no problem ans ----//
function publicBusFare(people) {

    const eachReserveBusCapacity = 50;
    const eachMicroBusCapacity = 11;
    const busFare = 250;
    const busRemaining = people % eachReserveBusCapacity;
    const microBusRemaining = busRemaining % eachMicroBusCapacity;
    const publicBusFareMoney = microBusRemaining * busFare;
    if (typeof people !== "number") {
        return 'Please Enter a valid number';
    } else {
        return publicBusFareMoney;
    }
}
console.log(publicBusFare(50));

//----------------//

// 5no problem answer ----//
function isBestFriend(friend1, friend2) {
    if (friend1.name === friend2.friend && friend1.friend === friend2.name) {
        return true;
    }
    else if (friend1.name !== "string" || friend2.name !== "string" || friend1.friend !== "string" || friend2.friend !== "string") {
        return 'Enter a valid string';
    }
    else {
        return false;
    }
}
const friend1 = { name: 'abul', friend: 'babul' }
const friend2 = { name: 'babul', friend: 'abul' }
console.log(isBestFriend(friend1, friend2));


//----------------------//

