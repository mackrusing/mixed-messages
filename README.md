# Mixed Messages

[![version](https://img.shields.io/github/package-json/v/mackrusing/mixed-messages)](./package.json)
![total lines](https://img.shields.io/tokei/lines/github/mackrusing/mixed-messages)
[![license](https://img.shields.io/github/license/mackrusing/mixed-messages)](./license.md)
[![last commit](https://img.shields.io/github/last-commit/mackrusing/mixed-messages)](https://github.com/mackrusing/mixed-messages/commits)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

A program that generates a random d&d character and prints information about it to the console. All the data derrived from is from the 5e Player's Handbook.

- [Installation](#installation)
- [Usage](#usage)
- [Issues](#issues)
- [License](#license)
- [Referemces](#references)

## Installation

1. Clone this repository to your machine

```shell
git clone https://github.com/mackrusing/rest-api.git
```

2. Install the dependences using npm

```
npm install
```

3. Run the start script

```
npm start
```

## Usage

The data is randomly selected in one function and passed into a second function that creates an object. This object look like this:

```js
{
  pronouns: { Object }
  firstName: 'Adrik',
  lastName: 'Balderk',
  fullName: 'Adrik Balderk',
  race: 'hill dwarf',
  chClass: 'barbarian',
  background: 'folk hero',
  alignment: 'neutral good',
  appearance: {
    skin: 'deep tan',
    eyes: 'brown',
    hair: 'brown',
    height: '132', // in cm
    weight: '65', // in kg
    age: '68',
  }
}
```

The object uses the `.logInfo()` method to return information about the character. That looks something like this:

```
Adrik Balderk is a 68 year old hill dwarf barbarian.

Adrik has deep tan skin, brown hair, and brown eyes.
They are 132 cm tall and weigh 65 kg.
```

## Issues

## License

## References
