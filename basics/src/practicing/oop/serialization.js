class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toJSON() {
        return {
            class: this.constructor.name,
            name: this.name,
            age: this.age
        };
    }

    reviver(key, value) {
        if (typeof value === 'object' && value !== null && 'name' in value && 'age' in value) {
          return new Person(value.name, value.age);
        }
        return value;
      }

    static fromJSON(json) {
        const obj = JSON.parse(json);
        return new Person(obj.name, obj.age, obj.city);
      }
}



const person = new Person("Joe", 32);
console.log(person);
const persons = [new Person("Joe", 32), new Person("Jane", 31)]; 

const serializedPerson = JSON.stringify(person);
console.log(serializedPerson);
const deserelizedPerson = JSON.parse(serializedPerson);
console.log("....");
console.log(deserelizedPerson);

const ppp = Person.fromJSON(serializedPerson);
console.log(ppp);
