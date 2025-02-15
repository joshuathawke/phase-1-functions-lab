// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks < 42){
    return (42 - blocks);}
    else {
        return(blocks - 42);
    }
}

function distanceFromHqInFeet(blocks) {
        return distanceFromHqInBlocks(blocks)*264;
    }


function distanceTravelledInFeet(a, b) {
    if (a < b)  {
        return (b - a) * 264;
    } else {
        return (a - b) * 264;
    }

}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
}