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
    possessive: 'his',
    reflexive: 'himself'
  },
  feminine: {
    subjective: 'she',
    objective: 'her',
    possessive: 'hers',
    reflexive: 'herself'
  },
  neutral: {
    subjective: 'they',
    objective: 'them',
    possessive: 'theirs',
    reflexive: 'themself'
  }
};

// capitalize first letter
function capitalize(input) {
  return input[0].toUpperCase() + input.slice(1);
};

// random number in range (inclusive)
function randomIntInRange(min, max) {
  return Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1) + parseInt(min));
}

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
    fullName: `${firstName} ${lastName}`,
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
    logInfo() {
      console.log(
        `${this.fullName} is a ${this.appearance.age} year old ${this.race} ${this.chClass}.`
      );
    },
    logAppearance() {
      let beForm;
      let weighForm;
      if (this.pronouns.subjective === 'they') {
        beForm = 'are';
        weighForm = 'weigh';
      } else {
        beForm = 'is';
        weighForm = 'weighs';
      }
      console.log(
        `${this.firstName} has ${this.appearance.skin} skin, ${this.appearance.hair} hair, and ${this.appearance.eyes} eyes. ${capitalize(this.pronouns.subjective)} ${beForm} ${this.appearance.height} cm tall and ${weighForm} ${this.appearance.weight} kg.`
      );
    },
    logCharacteristics() {
      let idealQuoteArray = this.characteristics.ideal.split(' ');
      idealQuoteArray.shift();
      let idealQuote = idealQuoteArray.join(' ');
      console.log(`${this.firstName} ${this.background.description}`)
      console.log(`This is how ${this.pronouns.subjective} would describe ${this.pronouns.reflexive}: `);
      console.log(`- "${this.characteristics.personalityTrait}"`);
      console.log(`- "${idealQuote}"`);
      console.log(`- "${this.characteristics.bond}"`);
      console.log(`- "${this.characteristics.flaw}"`);
    }
  }
};

// create a random character
function createRandomCharacter() {
  
  // independent
  let randomPronouns = randomFromObject(pronounPool);
  let randomClass = randomFromArray(dataPool.classPool);
  let randomAlignment = randomFromArray(dataPool.alignmentPool);
  
  let selectedRace = randomFromArray(dataPool.racePool); // for reference
  let randomRace = selectedRace.name; // passed into object
  
  // let selectedBackground = randomFromArray(dataPool.backgroundPool); // for reference
  let selectedBackground = dataPool.backgroundPool[0]; // remove when data is in place
  let randomBackground = { // passed into object
    name: selectedBackground.name,
    description: selectedBackground.decription
  }
  
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
  let randomHeight = randomIntInRange(selectedRace.heightPool.min, selectedRace.heightPool.max);
  let randomWeight = randomIntInRange(selectedRace.weightPool.min, selectedRace.weightPool.max);
  let randomAge = randomIntInRange(selectedRace.agePool.min, selectedRace.agePool.max);
  
  // influenced by background
  let randomPersonalityTrait = randomFromArray(selectedBackground.personalityTraitPool);
  let randomIdeal = randomFromArray(selectedBackground.idealPool);
  let randomBond = randomFromArray(selectedBackground.bondPool);
  let randomFlaw = randomFromArray(selectedBackground.flawPool);
  
  // return character object
  return characterFactory(randomPronouns, randomFirstName, randomLastName, randomRace, randomClass, randomBackground, randomSkin, randomEyes, randomHair, randomHeight, randomWeight, randomAge, randomAlignment, randomPersonalityTrait, randomIdeal, randomBond, randomFlaw);
};

const randomChatacter = createRandomCharacter();
randomChatacter.logInfo();
randomChatacter.logAppearance();
randomChatacter.logCharacteristics();
