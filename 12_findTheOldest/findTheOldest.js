const findTheOldest = function(people) {
    const oldest = people.reduce((acc, curr) => {
        let currAge, oldestAge;

        if (!curr.yearOfDeath) {
            // Calculate age if the person is alive
            currAge = new Date().getFullYear() - curr.yearOfBirth;
        } else {
            // Calculate age if the person has died
            currAge = curr.yearOfDeath - curr.yearOfBirth;
        }

        if (!acc.yearOfDeath) {
            // Calculate age of the oldest person if they are alive
            oldestAge = new Date().getFullYear() - acc.yearOfBirth;
        } else {
            // Calculate age of the oldest person if they have died
            oldestAge = acc.yearOfDeath - acc.yearOfBirth;
        }

        if (currAge > oldestAge) {
            return curr; // Update oldest person to current person if current person is older
        } else {
            return acc; // Otherwise, keep the current oldest person
        }
    });
    return oldest;
};


// Do not edit below this line
module.exports = findTheOldest;
