// Mack Rusing
// Mixed Messages
// 2021-12-13

// variables for random character gen
const masculineNames = [
  'Joe'
];
const feminineNames = [
  'Jean'
];
const neutralNames = [
  'Jamie'
];
const allNames = [
  ...masculineNames, 
  ...feminineNames, 
  ...neutralNames
];
const lastNames = [
  'Luthorn'
];
const titles = [
  'Destroyer of Worlds'
];
const townName1 = [
  'North'
];
const townName2 = [
  'shire'
];
const races = [
  'human'
];
const alignments = [
  'neutral good'
];
const lifeStyles = [
  'poor'
];

// character object factory
function characterFactory(name, parent1, parent2, birthplace, age, race, alignment, lifeStyle) {
  return {
    name,
    parent1,
    parent2,
    birthplace,
    age,
    race,
    alignment,
    lifeStyle
  }
}

// create a random character
function createRandomCharacter() {
  let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  let fullName = `${allNames[Math.floor(Math.random() * allNames.length)]} ${lastName}`;
  let parent1Name = `${allNames[Math.floor(Math.random() * allNames.length)]} ${lastName}`;
  let parent2Name = `${allNames[Math.floor(Math.random() * allNames.length)]} ${lastName}`;
  let birthplace = townName1 + townName2;
  let age = Math.floor(Math.random() * 35) + 16; // random age from 16-50
  let race = races[Math.floor(Math.random() * races.length)];
  let alignment = alignments[Math.floor(Math.random() * alignments.length)];
  let lifeStyle = lifeStyles[Math.floor(Math.random() * lifeStyles.length)];
  return characterFactory(fullName, parent1Name, parent2Name, birthplace, age, race, alignment, lifeStyle);
}



/* 
ideas: 
- create object of character
- calculate chance of selection
- old / young / etc in message based on age
- check for identical names
- put data in an object, add getters and setters

- race
- name (random name gen)
- parents (random name gen)
- birthplace (random town gen)
- current age 
- alignment
- life style
- title
*/ 
