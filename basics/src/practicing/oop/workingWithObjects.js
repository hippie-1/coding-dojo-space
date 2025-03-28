
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
    equals(obj) {
        if (obj==null) return false;
        if (!(obj instanceof Envilope)) return false;
        if (this.amountOfMoney==obj.amountOfMoney && this.currencyCode==obj.currencyCode) return true;
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
        return 1;
    }
    toString() {
        return "Nice person with id: " + this.id +  ", and name: " + this.name + " and haircolor: " + this.haircolor;
    }
}



let envilope1 = new Envilope(1000, 'NOK');
let envilope2 = new Envilope(1000, 'NOK');
let envilope3 = new Envilope(1000, 'NOK');
let envilope4 = new Envilope(1000, 'NOK');
let envilope5 = new Envilope(1000, 'NOK');

//console.log(envilope1===envilope2); //memory address is compared
console.log(envilope1.equals(envilope1)); //reflexive: an object must equal itself
console.log(envilope1.equals(envilope2), envilope2.equals(envilope1 ) ); //symmetric: x.equals(y) must return the same result as y.equals(x)
console.log(envilope1.equals(envilope2), envilope2.equals(envilope3), envilope1.equals(envilope3)); //transitive: if x.equals(y) and y.equals(z), then also x.equals(z)

console.log(envilope4.equals(envilope5));
envilope5.setAmountOfMoney(1001);
console.log(envilope4.equals(envilope5)); //consistent: the value of .equals() should change only if a property that is contained in .equals() changes (no randomness allowed)

let person1 = new Person(1, 'Réka', 'brown');
let person2 = new Person(1, 'Gyöngyi', 'brown'); //data inconsistency, data error

//console.log(person1===person1); //memory address is compared
//console.log(person1.equals(person1));
//console.log(person1.equals(person2));
//console.log(person2.equals(person1));

console.log("" + person1);
console.log(person1.toString());

console.log(person1.hashcode());

