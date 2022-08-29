// 3no Problem ans 

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