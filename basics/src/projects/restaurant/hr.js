import * as fs from 'node:fs';
import { Employee, NormalChef, PastryChef } from './employee.js';


class HR {
    employees = [];
    emloyeesDataStorageFile = 'employees.txt';
    
    constructor() {
        this.employees = this.#loadEmployees();
    }

    #loadEmployees () { 
        let employeesPlainText = null;
        try {
           employeesPlainText = fs.readFileSync(this.emloyeesDataStorageFile, 'utf8');
           console.log('File contents:', employeesPlainText);
           if (employeesPlainText) {
                let employees = JSON.parse(employeesPlainText);
                return employees;
           }
           else return [];
        } catch (err) {
            console.error('Error reading file:', err);
            throw err; //shuld not catch the error at all since we can not do anything with it here, only forward it to the invoker
        }
    }

    #persistNewEmployees(employees) { //private method, since it does not make sence to call it directly from outside
        let employeesPlainText = JSON.stringify(employees);
        try {
            fs.writeFileSync(this.emloyeesDataStorageFile, employeesPlainText);
                console.log('File written successfully!');
            } catch (err) {
            console.error('Error writing file:', err);
         }
    }

    createAndSaveEmployee(name, type) {
        let id = this.employees.length;
        let newlyHiredEmployee = this.#createEmployee(id, name, type); //no need to catch the exception, because we can not do anything with it, we have throw it the invoker
        this.employees[this.employees.length] = newlyHiredEmployee;
        this.#persistNewEmployees(this.employees);
    }

    #createEmployee(id, name, type) { //factory method
        switch (type) {
            case 'normal':
                return new NormalChef(id, name);
            case 'pastry':
                return new PastryChef(id, name);
            default:
              throw new Error(
                `Invalid class type "${type}". Choose one of: "normal", "pastry"`
                )
        }
    }

    getEmployee(id) {
        let foundEmployee = null;
        this.employees
        .filter(employee => employee.id == id)
        .map(employee => {
            foundEmployee = employee;
        });
        if (!foundEmployee) {
            throw "Employee with id " + id + " not found";
        }
        return foundEmployee;
    }

    updateEmployee(id, newName) {
        let employee = this.getEmployee(id);
        employee.name = newName;
        this.#persistNewEmployees(this.employees);
        return employee;
    }

    deleteEmployee(id) {
        this.employees = this.employees.filter(employee => employee.id !== id);
        this.#persistNewEmployees(this.employees);
        return true;
    }

}

let hr = new HR();
console.log(hr.employees);

hr.createAndSaveEmployee("Ákos", "normal");
hr.createAndSaveEmployee("Zsanett", "normal");
hr.createAndSaveEmployee("Krisztián", "normal");
hr.createAndSaveEmployee("Klaudia", "pastry");
hr.createAndSaveEmployee("Norbert", "pastry");
hr.createAndSaveEmployee("Géza", "pastry");
hr.createAndSaveEmployee("Bálint", "normal");

console.log(hr.getEmployee(5));
console.log(hr.updateEmployee(6, 'Zoltan'));
console.log(hr.deleteEmployee(4));

console.log(hr.employees);
