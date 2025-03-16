class Car {
    constructor(brand) {
      this.carname = brand;
    }
  
    present() {
      return 'I have a ' + this.carname;
    }
}
  
class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
  

    hello() {
      this.show();
    }

    show() {
      return this.present() + ', it is a ' + this.model;
    }

}
  
let myCar = new Model("Ford", "Mustang");
console.log(myCar.show()); // Outputs: I have a Ford, it is a Mustang

