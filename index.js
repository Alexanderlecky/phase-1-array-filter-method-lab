function findMatching(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === name.toLowerCase();
    });
}

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
console.log(findMatching(drivers, 'Bobby'));

function fuzzyMatch(drivers, letters) {
    return drivers.filter(function(driver) {
        return driver.startsWith(letters);
    });
}

function matchName(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.name === name;
    });
}

const driverObjects = [
    { name: 'Bobby', hometown: 'New York' },
    { name: 'Sammy', hometown: 'San Francisco' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Sarah', hometown: 'Miami' },
    { name: 'Bobby', hometown: 'Tampa' }
];

console.log(matchName(driverObjects, 'Bobby')); 