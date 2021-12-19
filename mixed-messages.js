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
function characterFactory(pronouns, firstName, lastName, race, chClass, background, skin, eyes, hair, height, weight, age, alignment, personalityTrait, ideal, bond, flaw) {
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
      personalityTrait,
      ideal,
      bond,
      flaw
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
  // selected race/background stores the actual object for reference
  // random race/background stores what will be passed into the character object
  // let selectedRace = randomFromArray(dataPool.racePool);
  let selectedRace = dataPool.racePool[0]; // for testing purposes, remove when data is in place
  let randomRace = selectedRace.name;
  // let selectedBackground = randomFromArray(dataPool.backgroundPool);
  let selectedBackground = dataPool.backgroundPool[0]; // for testing purposes, remove when data is in place
  let randomBackground = selectedBackground.name;
  let randomClass = randomFromArray(dataPool.classPool);
  let randomAlignment = randomFromArray(dataPool.alignmentPool);
  // influenced by race
  let randomFirstName;
  switch (randomPronouns.subjective) {
    case 'he':
      randomFirstName = randomFromArray(selectedRace.namePool.first.masculine);
      break;
    case 'she':
      randomFirstName = randomFromArray(selectedRace.namePool.first.feminine);
      break;
    default:
      let allNames = selectedRace.namePool.first.masculine.concat(selectedRace.namePool.first.feminine);
      randomFirstName = randomFromArray(allNames);
      break;
  };
  let randomLastName = randomFromArray(selectedRace.namePool.last);
  let randomSkin = randomFromArray(selectedRace.skinPool);
  let randomEyes = randomFromArray(selectedRace.eyePool);
  let randomHair = randomFromArray(selectedRace.hairPool);
  let randomHeight = parseInt(selectedRace.heightPool.base) + Math.ceil(Math.random() * selectedRace.heightPool.modMax);
  let randomWeight = selectedRace.weightPool.base * Math.ceil(Math.random() * selectedRace.weightPool.modMax);
  let randomAge = Math.floor(Math.random() * (selectedRace.agePool.max - selectedRace.agePool.min + 1) + selectedRace.agePool.min);
  ;
  // influenced by background
  let randomPersonalityTraits = randomFromArray(selectedBackground.personalityTraitPool);
  let randomIdeals = randomFromArray(selectedBackground.idealPool);
  let randomBonds = randomFromArray(selectedBackground.bondPool);
  let randomFlaws = randomFromArray(selectedBackground.flawPool);
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
randomChatacter.info()

/* 
ideas: 
- old / young / etc in message based on age
- put data in an object, add getters and setters
- randomization limits based on race
- create random parents for random character
- create random birthplace town for random character
  - town size

Quinn Hightopple is a young Halfling Rouge. Quinn was raised by Bartho and 
Qelline Hightopple in the small town of Northshire. 
*/ 
