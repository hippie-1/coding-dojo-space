export class SmallHuman extends Human {

    schoolName;

    constructor(name) {
        super(name);
        this.schoolName = "Priamry Shool at the corner";
    }

    toString () {
        return super.toString() + ", shcoolName: " + this.schoolName;
        //return this.birthDate;
    }

 }

export class Human {

    birthDate;
    name;
    static humanHistory;

    constructor(name) {
        this.birthDate = new Date();
        this.name = name;
    }

    toString() {
        return this.birthDate + ", " + this.name;
    }

    static toString () {
        return "HHUUMMAANN";
    }

    static valami() {
        console.log("valami");
        return "Valami";
    }

    static {
        this.humanHistory = "lsd. töri órán elhangzottak"
        console.log("this is a static block");
        console.log(this.humanHistory);
    }

  }



console.log("testHuman:, " + Human.humanHistory);
console.log("testHuman:, " + Human.valami());

let angelina = new Human("Angelina");
console.log(angelina.toString());

let peterson = new SmallHuman("Peti");
console.log(peterson.toString());


  