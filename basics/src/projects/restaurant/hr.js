class Employee {
    id;
    name;
    type;;

    constructor (id, name) {
        this.id = id;
        this.name = name;
    }
}

class NormalChef extends Employee {

    constructor (id, name) {
        super(id, name);
        this.type = 'normal';
    }

}

class PastryChef extends Employee {

    constructor (id, name) {
        super(id, name);
        this.type = 'pastry';
    }

}

class HR {
    employees;
    
    constructor() {
        this.employees = this.initEmployees();
    }

    initEmployees () {
        let employees = [
            new NormalChef(0, "Ákos"),
            new NormalChef(1, "Zsanett"),
            new NormalChef(2, "Krisztián"),
            new PastryChef(3, "Klaudia"),
            new PastryChef(4, "Norbert")
        ];
        return employees;
    }
}

let hr = new HR();
console.log(hr.employees);
