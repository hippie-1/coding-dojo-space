let age = 30; //primitive, mindig a kokrét érték került átadásra pl. egy függvény input paramétereként

let myObject1 = { //ha valami nem primitív, akkor már objektum, a memória címe kerül átadásra, pl. fügvény inputként
    name: "John",
    age: 3,
    city: "Debrecen"
  };


  let myObject2 = { // külön memória cím
    name: "John",
    age: 3,
    city: "Debrecen"
  };


  let myObject3 = {
    name: "John",
    age: 3,
    city: "Debrecen"
  };


  class Person {
    name;
    age;
    city;
    constructor (name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city; 
     }
}

//let myObjec1 = new Person("John", 3, "Debrecen"); //from Belugy
//let myObjec2 = new Person("John", 3, "Debrecen"); //from sajat rendszet

let colours = {
    "red": "[31m",
    "magenta": "[35m"
}

console.log(colours);
let keys = Object.keys(colours);
console.log(keys);
let values = Object.values(colours);
console.log(values);
let value1 = colours["red"]; //colours.red
console.log(value1);


let configs = {
    "logDir": "../logs",
    "dataStorDir": "../datastorage",
    "ip": "localhost",
    "port": 3000
}

let logdir = configs.logDir;
console.log(logdir);
let port = configs["port"];
console.log(port);




