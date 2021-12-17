// Mack Rusing
// Mixed Messages
// 2021-12-13

// import players handbook data
const dataPool = require('./players-handbook.json');

// pronouns
const pronounPool = {
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
};

// capitalize first letter
function capitalize(input) {
  return input[0].toUpperCase() + input.slice(1);
};

// random item from array
function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// random item from object
function randomFromObject(obj) {
  let keys = Object.keys(obj);
  return obj[keys[Math.floor(Math.random() * keys.length)]];
};

// character object factory
function characterFactory(pronouns, firstName, lastName, race, chClass, background, skin, eyes, hair, height, weight, age, alignment, personalityTraits, ideals, bonds, flaws) {
  return {
    pronouns, // masculine (he/him), feminine (she/her), or neutral (they/them)
    firstName, 
    lastName,
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
      // full name 
      let fullName = `${this.firstName} ${this.lastName}`;
      console.log(
        `${fullName} is a ${this.race} ${this.chClass}.`
      );
    },
    updateAppearance() {
      
    },
    updateCharacteristics() {
      
    }
  }
};

// create a random character
function createRandomCharacter() {
  let randomPronouns = randomFromObject(pronounPool);
  let randomFirstName;
  switch (randomPronouns.subjective) {
    case 'he':
      randomFirstName = randomFromArray(dataPool.names.first.masculine);
      break;
    case 'she':
      randomFirstName = randomFromArray(dataPool.names.first.feminine);
      break;
    default:
      allNames = dataPool.names.first.masculine.concat(dataPool.names.first.feminine);
      randomFirstName = randomFromArray(allNames);
      break;
  };
  let randomLastName = randomFromArray(dataPool.names.last);
  let randomRace = randomFromArray(dataPool.races);
  let randomClass = randomFromArray(dataPool.classes);
  let randomBackground;
  // not randomized -- will be undefined in returned object
  let randomSkin;
  let randomEyes;
  let randomHair;
  let randomHeight;
  let randomWeight;
  let randomAge;
  let randomAlignment;
  let randomPersonalityTraits;
  let randomIdeals;
  let randomBonds;
  let randomFlaws;
  return characterFactory(randomPronouns, randomFirstName, randomLastName, randomRace, randomClass, randomBackground, randomSkin, randomEyes, randomHair, randomHeight, randomWeight, randomAge, randomAlignment, randomPersonalityTraits, randomIdeals, randomBonds, randomFlaws);
};

// test cases
const testCharacter = characterFactory(
  pronounPool.masculine,
  'Quinn',
  'Hightopple',
  'halfling',
  'rogue',
  'criminal',
  'fair',
  'brown',
  'brown',
  89,
  17,
  21,
  'neutral',
  "Nice set of teeth you got there. Be a shame if something bad happened to 'em.",
  "No challenge is too big to overcome. As Papa Bartho always says, the bigger they are, the harder they fall",
  "Nothing's more important than friendship. That's why I'll never leave a friend behind.",
  "I can't resist punching tall folk in the groin. I call it the Halfling Hello."
);

// console.log(testCharacter);
// testCharacter.info();

const randomChatacter = createRandomCharacter();
console.log(randomChatacter);

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
