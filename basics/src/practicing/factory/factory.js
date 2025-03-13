class Character {};

class Mag extends Character {}
class Thief extends Character {}
class Archer extends Character {}
class Warrior extends Character {}

class Profile {
  constructor(name, email = '') {
    this.name = name
    this.email = email
  }

  createCharacterClass () {}

  createCharacter(classType) {
    switch (classType) {
      case 'archer':
        this.character = new Archer()
        return this.character
      case 'mage':
        this.character = new Mag()
        return this.character
      case 'thief':
        this.character = new Thief()
        return this.character
      case 'warrior':
        this.character = new Warrior()
        return this.character
      default:
        throw new Error(
          `Invalid class type "${classType}". Choose one of: "archer", "mage", "thief", or "warrior"`,
        )
    }
  }

  synchronizeProfileContacts(anotherProfile) {
    // Do something to inherit anotherProfile's contacts
  }

  setName(name) {
    this.name = name
  }

  setEmail(email) {
    this.email = email
  }
}

class Game {
  constructor() {
    this.users = {}
  }

  createUser(name) {
    const user = new Profile(name)
    this.users[user.id] = user
    return user
  }
}

const game = new Game()
const bobsProfile = game.createUser('bob')
const bobsMage = bobsProfile.createCharacter('mage')
const rekasProfile = game.createUser('reka')
const rekasCharacter = rekasProfile.createCharacter('archer')
const gyongyisProfile = game.createUser('gyongyi')
const gyongyisCharacter = gyongyisProfile.createCharacter('pianist')
console.log(gyongyisCharacter);
