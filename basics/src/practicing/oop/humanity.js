import { sleepAsync } from "../../util/BasicFunctions.js";

class Human {

    static planet = "Earth";
    static now;
    static #name = "Homo Sapience";
    static age = 10000000;

    _color = "any";
    name;
    age;
    gender;
    static #people = []; //jelenleg elo emberek, kb. 8 000 000 000


    static {
        this.now = new Date();
        console.log("static block at the beginning  " + this.now);
        this.#people.push(new Human("Arpi", 21, "male"));
        this.#people.push(new Human("Peti", 22, "male"));
        console.log(this.getPlanet());
    }

    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    static habitatPlanet() {

        return this.planet + " at the time of: " + this.now;
    }

    toString() {
        return this.name + " " + this.age  + " " + this._color;;
    }

    static getPlanet() {
        return this.planet;
    }

    static toString() {
        return this.#name + " " + this.age;
    }

    static getPeople() {
        return this.#people;
    }

    static getMen() {
        return this.#people.filter(e => e.gender == "male");
    }

    static getFemale() {
        return this.#people.filter(e => e.gender == "female");
    }

    static {
        this.now = new Date();
        console.log("static block at the end1  " + this.now);
        this.#people.push(new Human("Gala", 16, "female"));
    }

    static {
        this.now = new Date();
        console.log("static block at the end2  " + this.now);
        this.#people.push(new Human("Evi", 15, "female"));
    }

}

class WhiteHuman extends Human {
    _color = "white";
}

//test
const ourPlanet1 = Human.habitatPlanet();
console.log(ourPlanet1);
Human.age = 1000;
//Human.#name = "Oroszlan";
console.log(Human.toString());
console.log(Human.getFemale());

const reka = new WhiteHuman("Reka", "18");
console.log(reka.toString());
const gyongyi = new WhiteHuman("Gyöngyi", "19");
console.log(gyongyi.toString());