// Mack Rusing
// Mixed Messages
// 2021-12-13

// import players handbook data
const dataPool = require('./players-handbook.json');

// capitalize function
function capitalize(input) {
  return input[0].toUpperCase() + input.slice(1);
}

// pronouns
const pronouns = {
  masculine: {
    subjective: 'he',
    objective: 'him',
    possessive: 'his'
  },
  feminine: {
    subjective: 'she',
    objective: 'her',
    possessive: 'hers'
  },
  neutral: {
    subjective: 'they',
    objective: 'them',
    possessive: 'theirs'
  }
}

// character object factory
function characterFactory(name, pronouns, race, chClass, background, skin, eyes, hair, height, weight, age, alignment, personalityTraits, ideals, bonds, flaws) {
  return {
    name, // first and last
    pronouns, // masculine (he/him), feminine (she/her), or neutral (they/them)
    race,
    chClass,
    background,
    appearance: {
      skin,
      eyes,
      hair,
      height, // in cm
      weight, // in kg
      age
    },
    characteristics: {
      alignment,
      personalityTraits,
      ideals,
      bonds,
      flaws
    },
    info() {
      // age group
      let ageGroup = 'aspiring'
      if (this.appearance.age > 25) {
        ageGroup = 'young';
      } else if (this.appearance.age > 00) {
        ageGroup = 'seasoned';
      } else {
        ageGroup = 'vetran';
      }
      console.log(
        `${this.name} is a ${ageGroup} ${this.race} ${this.chClass}.`
      );
    }
  }
}

// create a random character
function createRandomCharacter() {
}

// test cases
const testCharacter = characterFactory('Quinn Hightopple', 'masculine', 'halfling', 'rogue', 'criminal', 'fair', 'brown', 'brown', 89, 17, 21, 'neutral', "Nice set of teeth you got there. Be a shame if something bad happened to 'em.", "No challenge is too big to overcome. As Papa Bartho always says, the bigger they are, the harder they fall", "Nothing's more important than friendship. That's why I'll never leave a friend behind.", "I can't resist punching tall folk in the groin. I call it the Halfling Hello.");

console.log(testCharacter);
testCharacter.info();


/* 
ideas: 
- old / young / etc in message based on age
- put data in an object, add getters and setters
- randomization limits based on race
- create random parents for random character
- create random birthplace town for random character
  - town size

NAME is a(n) AGE GROUP RACE CLASS at the age of AGE. FIRST NAME was raised by 
PARENT 1 FIRST NAME and PARENT 2 FIRST NAME LAST NAME in the SIZE 
settlement/town/city of BIRTHPLACE. 

Quinn Hightopple is a young Halfling Rouge. Quinn was raised by Bartho and 
Qelline Hightopple in the small town of Northshire. 
*/ 
