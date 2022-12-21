const findTheOldest = function(people) {
    let oldest = people.reduce((prevObj,currentObj) => {
        let prevAge;
        let currentAge;
        if(!prevObj.yearOfDeath){
            prevAge = (new Date().getFullYear()) - prevObj.yearOfBirth;
            console.log(prevAge);
        } else {
            prevAge = prevObj.yearOfDeath - prevObj.yearOfBirth;
        }
        if(!currentObj.yearOfDeath){
            currentAge = (new Date().getFullYear()) - currentObj.yearOfBirth;
            console.log(currentAge);
        } else {
            currentAge = currentObj.yearOfDeath - currentObj.yearOfBirth;
        }

        let olderAgeObj = currentAge > prevAge ? currentObj : prevObj;
        return olderAgeObj;})

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
