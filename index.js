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
    reflexive: 'himself',
  },
  feminine: {
    subjective: 'she',
    objective: 'her',
    possessive: 'hers',
    reflexive: 'herself',
  },
  neutral: {
    subjective: 'they',
    objective: 'them',
    possessive: 'theirs',
    reflexive: 'themself',
  },
};

// capitalize first letter
function capitalize(input) {
  return input[0].toUpperCase() + input.slice(1);
}

// random number in range (inclusive)
function randomIntInRange(min, max) {
  return Math.floor(
    Math.random() * (parseInt(max) - parseInt(min) + 1) + parseInt(min)
  );
}

// random item from array
function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// random item from object
function randomFromObject(obj) {
  let keys = Object.keys(obj);
  return obj[keys[Math.floor(Math.random() * keys.length)]];
}

// character object factory
function characterFactory(
  pronouns,
  firstName,
  lastName,
  race,
  chClass,
  background,
  alignment,
  skin,
  eyes,
  hair,
  height,
  weight,
  age
) {
  return {
    pronouns, // masculine (he/him), feminine (she/her), or neutral (they/them)
    firstName,
    lastName,
    fullName: lastName ? `${firstName} ${lastName}` : firstName,
    race,
    chClass,
    background,
    alignment,
    appearance: {
      skin,
      eyes,
      hair,
      height, // in cm
      weight, // in kg
      age,
    },
    logInfo() {
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
        `${this.fullName} is a ${this.appearance.age} year old ${this.race} ${this.chClass}.`
      );
      this.appearance.hair
        ? console.log(
            `${this.firstName} has ${this.appearance.skin} skin, ${
              this.appearance.hair
            } hair, and ${this.appearance.eyes} eyes. ${capitalize(
              this.pronouns.subjective
            )} ${beForm} ${this.appearance.height} cm tall and ${weighForm} ${
              this.appearance.weight
            } kg.`
          )
        : console.log(
            `${this.firstName} has ${this.appearance.skin} skin and ${
              this.appearance.eyes
            } eyes. ${capitalize(this.pronouns.subjective)} ${beForm} ${
              this.appearance.height
            } cm tall and ${weighForm} ${this.appearance.weight} kg.`
          );
    },
  };
}

// create a random character
function createRandomCharacter() {
  // independent
  let randomPronouns = randomFromObject(pronounPool);
  let randomClass = randomFromArray(dataPool.classPool);
  let randomAlignment = randomFromArray(dataPool.alignmentPool);
  let randomBackground = randomFromArray(dataPool.backgroundPool);

  let selectedRace = randomFromArray(dataPool.racePool); // for reference
  let randomRace = selectedRace.name; // passed into object

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
      let allNames = selectedRace.namePool.first.masculine.concat(
        selectedRace.namePool.first.feminine
      );
      randomFirstName = randomFromArray(allNames);
      break;
  }
  let randomLastName = randomFromArray(selectedRace.namePool.last);
  let randomSkin = randomFromArray(selectedRace.skinPool);
  let randomEyes = randomFromArray(selectedRace.eyePool);
  let randomHair = randomFromArray(selectedRace.hairPool);
  let randomHeight = randomIntInRange(
    selectedRace.heightPool.min,
    selectedRace.heightPool.max
  );
  let randomWeight = randomIntInRange(
    selectedRace.weightPool.min,
    selectedRace.weightPool.max
  );
  let randomAge = randomIntInRange(
    selectedRace.agePool.min,
    selectedRace.agePool.max
  );

  // return character object
  return characterFactory(
    randomPronouns,
    randomFirstName,
    randomLastName,
    randomRace,
    randomClass,
    randomBackground,
    randomAlignment,
    randomSkin,
    randomEyes,
    randomHair,
    randomHeight,
    randomWeight,
    randomAge
  );
}

const testCharacter = characterFactory(
  pronounPool.masculine,
  'Quinn',
  'Hightopple',
  'lightfoot halfling',
  'fighter',
  'folk hero',
  'neutral good',
  'pale',
  'hazel',
  'wavy brown',
  90,
  17,
  21
);
// testCharacter.logInfo();

const randomChartacter = createRandomCharacter();
randomChartacter.logInfo();
