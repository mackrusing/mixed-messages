// Mack Rusing
// Mixed Messages
// 2021-12-13

// character object factory
function characterFactory(name, pronouns, race, chClass, background, skin, eyes, hair, height, weight, age, alignment, personalityTraits, ideals, bonds, flaws) {
  return {
    name,
    pronouns,
    race,
    chClass,
    background,
    appearance: {
      skin,
      eyes,
      hair,
      height,
      weight,
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

    }
  }
}

// create a random character
function createRandomCharacter() {
  let familyName = familyNames[Math.floor(Math.random() * familyNames.length)];
  let fullName = `${allNames[Math.floor(Math.random() * allNames.length)]} ${familyName}`;
  let pronons = pronouns[Math.floor(Math.random() * pronouns.length)];
  let parent1Name = `${allNames[Math.floor(Math.random() * allNames.length)]} ${familyName}`;
  let parent2Name = `${allNames[Math.floor(Math.random() * allNames.length)]} ${familyName}`;
  let birthplace = townName1 + townName2;
  let age = Math.floor(Math.random() * 35) + 16; // random age from 16-50
  let race = races[Math.floor(Math.random() * races.length)];
  let alignment = alignments[Math.floor(Math.random() * alignments.length)];
  let lifeStyle = lifeStyles[Math.floor(Math.random() * lifeStyles.length)];
}

let testData = require('./players-handbook.json');
console.log(testData.races.dwarf.names.first)

/* 
ideas: 
- create object of character
- calculate chance of selection
- old / young / etc in message based on age
- check for identical names
- put data in an object, add getters and setters
- randomization limits based on race

- race
- class
- name (random name gen)
- parents (random name gen)
- birthplace (random town gen)
- town size
- current age 
- alignment
- life style
- title

NAME is a(n) AGE GROUP RACE CLASS at the age of AGE. FIRST NAME was raised by 
PARENT 1 FIRST NAME and PARENT 2 FIRST NAME LAST NAME in the SIZE 
settlement/town/city of BIRTHPLACE. 

Quinn Hightopple is a young Halfling Rouge. Quinn was raised by Bartho and 
Qelline Hightopple in the small town of Northshire. 

- name (first + last)
- pronouns
- race
- class
- background
- appearance
  - skin
  - eyes
  - hair
  - height
  - weight
  - age
- characteristics
  - alignments
  - personality traits
  - ideals
  - bonds
  - flaws
- 
*/ 
