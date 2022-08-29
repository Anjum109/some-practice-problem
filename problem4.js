// 4no problem ans 
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