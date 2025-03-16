class Shape {  //absract 
    name;
    constructor(name) {
       this.name = name;
    }

    toString () {
        return "Name: " + this.name + ", area: " + this.getArea();
    }

    getArea() { //ha ez benne van az ősosztályban, mint abstract method, akkor kötelező minden leszármazottnak definiálnia
        return "I am an abstract method";
    }
  }
  
  class Circle extends Shape {
    radius;
    constructor(radius){
       super('kor');
       this.radius = radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

  }

  class Rectangle extends Shape {
    length;
    width;
  
     constructor(length, width){
       super('teglalap');
       this.length = length;
       this.width = width;
     }

     getArea() {
        return this.length * this.width;
     }
  } 

  class BuildingFactory {
    constructor () {}

    createBasePlan (type) {
      switch (type) {
        case 'jurta':
          return new Circle(6)
        case 'kadarkocka':
          return new Rectangle(5, 5)
        case 'iglu':
          return new Circle(1)
        case 'indiansator':
          return new Circle(2)
        case 'decathlonsator':
          return new Rectangle(1, 3)
        default:
          return new Rectangle(4, 7)
      }

    }
  }
  
const houseBuildingFactory = new BuildingFactory();
const houseBase = houseBuildingFactory.createBasePlan('kadarkocka');

console.log(`First step is our house to dig out the foundation: ${houseBase}`);


