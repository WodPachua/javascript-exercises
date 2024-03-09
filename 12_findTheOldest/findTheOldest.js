const findTheOldest = function(arr) {

    return arr.reduce((older, person) => {
        const olderAge = currentAge(older.yearOfBirth, older.yearOfDeath);
        const personAge = currentAge(
          person.yearOfBirth,
          person.yearOfDeath
        );
        return olderAge < personAge ? person : older;
      });
    };
    
    const currentAge = function (yearBirth, yearDeath) {
      if (!yearDeath) {
        yearDeath = new Date().getFullYear();
      }
      return yearDeath - yearBirth;

};

// Do not edit below this line
module.exports = findTheOldest;
