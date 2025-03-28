import { stringToHash } from "../strings/strings.js";
class Envilope { //value object (nokia box)
    amountOfMoney;
    currencyCode;

    constructor(amountOfMoney, currencyCode) {
        this.amountOfMoney = amountOfMoney;
        this.currencyCode = currencyCode;
    }
    setAmountOfMoney(newAmountOfMoney) {
        this.amountOfMoney = newAmountOfMoney; 
    }
    setCurrencyCode(newCurrencyCode) {
        this.currencyCode = newCurrencyCode; 
    }
    hashCode() { //should be integer
        return 7 + stringToHash(this.currencyCode.charCodeAt(0)) + 123 + this.amountOfMoney; 
        //if any of the attributes mentioned in equals changes 
            //will change the result of equals
            //it must change the reuslt of hashCode as well
        //internal consistency: the value of hashCode() may only change if a property that is in equals() changes

        //equals consistency: objects that are equal to each other must return the same hashCode
        //collisions: unequal objects may have the same hashCode
        //post office example, hashcode is calculated by: addressee's distrinct and first lett of addressee's name, but not calculated by other attributs eg.: from (feladó)
            //Vida Réka's (living in 2nd distrhct) envilope 1 (coming from Belügy) hashcode: 2v
            //Vida Réka's (living in 2nd distrhct) envilope 2 (coming from Peti) hashcode: 2v
            //2v hashCode may have:
                //Vida Réka's (living in 2nd distrhct) envilope hascode: 2v
                //Varga József' (living in 2nd distrhct) envilope hascode: 2v
    }
    equals(obj) {
        if (obj==null) return false;
        if (!(obj instanceof Envilope)) return false;
        if (this.amountOfMoney==obj.amountOfMoney &&  this.currencyCode==obj.currencyCode) return true;
        else return false;
    }
}

class Person { //entity
    id; //eg1: Belugy szem.sz. Mo-n unique, eg2: uuid
    name;
    haircolor;

    constructor(id, name, haircolor) {
        this.id = id;
        this.name = name;
        this.haircolor = haircolor;
    }
    
    equals(obj) {
        if (obj==null) return false;
        if (this==obj) return true;
        if (!(obj instanceof Person)) return false;
        let keys = Object.keys(this);
        for (let i=0; i<keys.length; i++) {
            if (this[keys[i]] !== obj[keys[i]]) {
                return false;
            }
        }
        return true;
    }
    hashcode() {
        return 1; //not nice
    }
    toString() {
        return "Nice person with id: " + this.id +  ", and name: " + this.name + " and haircolor: " + this.haircolor;
    }
}



let envilope1 = new Envilope(1000, 'NOK');
let envilope2 = new Envilope(2000, 'NOK');
let envilope3 = new Envilope(3000, 'NOK');
let envilope4 = new Envilope(4000, 'NOK');
let envilope5 = new Envilope(5000, 'NOK');

//console.log(envilope1===envilope2); //memory address is compared
//console.log(envilope1.equals(envilope1)); //reflexive: an object must equal itself
//onsole.log(envilope1.equals(envilope2), envilope2.equals(envilope1 ) ); //symmetric: x.equals(y) must return the same result as y.equals(x)
//console.log(envilope1.equals(envilope2), envilope2.equals(envilope3), envilope1.equals(envilope3)); //transitive: if x.equals(y) and y.equals(z), then also x.equals(z)

//console.log(envilope4.equals(envilope5));
//envilope5.setAmountOfMoney(1001);
//console.log(envilope4.equals(envilope5)); //consistent: the value of .equals() should change only if a property that is contained in .equals() changes (no randomness allowed)

//let person1 = new Person(1, 'Réka', 'brown');
//let person2 = new Person(1, 'Gyöngyi', 'brown'); //data inconsistency, data error

//console.log(person1===person1); //memory address is compared
//console.log(person1.equals(person1));
//console.log(person1.equals(person2));
//console.log(person2.equals(person1));

//console.log("" + person1);

// console.log(envilope1.hashCode());
// console.log(envilope2.hashCode());
// console.log(envilope3.hashCode());
// console.log(envilope4.hashCode());

console.log(envilope5);
console.log(envilope5.hashCode());
console.log("equlas by equals method: " + envilope5.equals(new Envilope(5000, 'NOK')));
console.log("equlas by hashCode method: " + (envilope5.hashCode() == (new Envilope(5000, 'NOK')).hashCode()) );

//envilope5.setAmountOfMoney(5001);
envilope5.setCurrencyCode('NID');
console.log(envilope5);
console.log(envilope5.hashCode());
console.log("equlas by equals method: " + envilope5.equals(new Envilope(5000, 'NOK')));
console.log("equlas by hashCode method: " + (envilope5.hashCode() == (new Envilope(5000, 'NOK')).hashCode()) );

//let brouteForceResult = bruteForce();
//console.log(brouteForceResult);

function bruteForce() {
    let found = false;
    for (let i=0; i<1000000; i++) { //brute forcing, kipörgetés, could be complex function using character codes, etc. The stronger hardware can find hashed something easier
        if (i == envilope4.hashCode()) {
            found = true;
            console.log("brute forse stoped at i=" + i + " which is the hashCode to open the envilope4");
            return found;
        }
    }
    return found;
}
