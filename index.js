// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
        return Math.abs(42 - someValue);
}
function distanceFromHqInFeet (someValue){
    distanceFromHqInBlocks(someValue);
    return Math.abs(distanceFromHqInBlocks(someValue))*264;
}
function distanceTravelledInFeet(start, destination) {
    distanceFromHqInFeet(start);
    distanceFromHqInFeet(destination);
    return Math.abs(distanceFromHqInFeet(start) - distanceFromHqInFeet(destination));
}
function calculatesFarePrice(start, destination) {
    distanceFromHqInFeet(start);
    distanceFromHqInFeet(destination);
    var distance = Math.abs(distanceFromHqInFeet(start) - distanceFromHqInFeet(destination));
    let result
    if (distance <= 400) {
        result = 0;
        return result
    }
    else if (distance <= 2000) {
        result = (distance - 400)*0.02;
        return result
    }
    else if (distance < 2500) {
        return 25;
    }
    else if (distance > 2500) {
        result = 'cannot travel that far'
        return result;
        }
}