// Mack Rusing
// Mixed Messages
// 2021-12-13

// first names (masculine)
const masculineNames = []

// first names (feminine)
const feminineNames = []

// first names (neutral)
const neutralNames = []

// all names
const allNames = [...masculineNames, ...feminineNames, ...neutralNames]

// last names
const lastNames = []

// titles
const titles = []

// town names pt 1
const townName1 = []

// town names pt 2
const townName2 = []

// alignments
const alignments = []

// life styles
const lifeStyles = []

// character object factory
function characterFactory(name, parent1, parent2, birthplace, age, alignment, lifeStyle) {
  return {
    name,
    parent1,
    parent2,
    birthplace,
    age,
    alignment,
    lifeStyle,
  }
}

// create a random character
function createRandomCharacter() {
  let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  let fullName = `${allNames[Math.floor(Math.random() * allNames.length)]} ${lastName}`;
}


/* 
ideas: 
- create object of character
- calculate chance of selection
- old / young / etc in message based on age

- name (random name gen)
- parents (random name gen)
- birthplace (random town gen)
- current age 
- alignment
- life style
*/ 
