class Shape {  //absract 
    name;
    constructor(name) {
       this.name = name;
    }

    toStirng () {
        return "Name: " + this.name + ", area: " + this.getArea();
    }

    getArea() { //ha ez benne van az ősosztályban, mint abstract method, akkor kötelező minden leszármazottnak definiálnia
        return "I am an abstract method";
    }

  }
  class Circle extends Shape {
    radius;
    constructor(name, radius){
       super(name);
       this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
      
  }

  class Rectangle extends Shape {
    length;
    width;
  
     constructor(name, length, width){
       super(name);
       this.length = length;
       this.width = width;
     }
     getArea() {
        return this.length * this.width;
     }
  
  } 
  
  const smallCircle = new Circle("Small Circle", 0.5); // This will work fine.
  const bigCircle = new Circle("Big Circle", 3); // This will work fine.
  const square = new Rectangle("Square", 4, 4);

  console.log(smallCircle.toStirng());
  console.log(bigCircle.toStirng());
  console.log(square.toStirng());


