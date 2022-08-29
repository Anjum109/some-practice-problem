// 5no problem ans
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