// Code your solution here
function findMatching(driversArray, name) {
    return driversArray.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(driversArray, firstLetters) {
    return driversArray.filter(driver => driver.startsWith(firstLetters));
}

function matchName(driverObjects, nameMatch) {
    return driverObjects.filter(driver => driver.name === nameMatch);
}