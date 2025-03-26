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
}



const person = new Person("Joe", 32);

const serializedPerson = JSON.stringify(person);
console.log(serializedPerson);
