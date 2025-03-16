function Person(name, age, hights) {
    this.name = name;
    this.age = age;
    this.hights = hights;
}

function Dog(name, age, hights) {
    this.name = name;
    this.age = age;
    this.hights = hights;
}

const dog1 = new Dog('Tomi', 14, 155);

const person1 = new Person('Tomi', 14, 155);
const person2 = new Person('Kati', 12, 150);

/*
console.log(person1 instanceof Person);
console.log(person2 instanceof Person);
*/

function isSamePerson (object1, object2) {
    if (object1 instanceof Person && object2 instanceof Person && 
    object1.name === object2.name && object1.age === object2.age && object1.hights === object2.hights) {
        return true;
    } else {
        return false;
    }
}

/*
console.log(isSamePerson(person1, person2));
console.log(isSamePerson(person1, person1));
console.log(isSamePerson(person1, dog1));
console.log(isSamePerson(dog1, dog1));
*/

const arrayOfPersons = [
    {name: 'Zsuzsi', age: 9, hights: 112},
    {name: 'Noel', age: 5, hights: 100},
    {name: 'Barni', age: 10, hights: 134},
    {name: 'Gala', age: 13, hights: 137},
    {name: 'Laci', age: 11, hights: 111}
]

function oldestPerson (personArray) {
    let maxAge = personArray[0].age;
    let personWithMaxAge = personArray[0];
    for (let i=0; i<personArray.length-1; i++) {
        if (personArray[i].age > maxAge) {
            maxAge = personArray[i].age;
            personWithMaxAge = personArray[i];
        }
      }
      return personWithMaxAge;
}

console.log(oldestPerson(arrayOfPersons));

export function elementExchange(array, index1, index2) {
    var tempValue = array[index1];
    array[index1] = array[index2];
    array[index2]= tempValue;
  }

// SimpleSwapSorting algorithm:
function sortPersonsByAge (originalPersonArray) { 
  
    var arrayOfPersons = originalPersonArray.slice();
    for (let i=0; i<arrayOfPersons.length; i++) {
      for (let j=i+1; j<arrayOfPersons.length; j++) {
        if (arrayOfPersons[i].age > arrayOfPersons[j].age) {
          elementExchange(arrayOfPersons, i, j)
        }
      }
    }
    return arrayOfPersons;
}

console.log(sortPersonsByAge (arrayOfPersons));