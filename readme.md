# Mixed Messages

A program that generates a random d&d character and prints information about it to the console. All the data derrived from is from the 5e Player's Handbook.

- [Installation](#installation)
- [Usage](#usage)
- [Issues](#issues)
- [License](#license)

## Installation

1. Clone this repository to your machine

```shell
git clone https://github.com/mackrusing/mixed-messages.git
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

The object uses the `.logInfo()` method to log information about the character to the console. That looks something like this:

```
Adrik Balderk is a 68 year old hill dwarf barbarian.

Adrik has deep tan skin, brown hair, and brown eyes.
They are 132 cm tall and weigh 65 kg.
```

## Issues

If you find any bugs, feel free to open an issue on this project's [issue page](https://github.com/mackrusing/mixed-messages/issues).

## License

Source code is licesnsed under the [MIT License](./license.md).

Player data taken from the 5e Player's Handbook is subject to copyright restrictions as defined by [Wizards of the Coast LLC](https://company.wizards.com/en).
