import * as fs from 'node:fs';
import { NormalChef, PastryChef } from './employee.js';
import { v4 as uuidv4 } from 'uuid';
import { Config } from '../../util/Config.js'


export class HR {
    employees = [];
    emloyeesDataStorageFile;
    
    constructor() {
        this.emloyeesDataStorageFile = Config.getDataStoreDirPath() + 'employees.json';
        console.log(this.emloyeesDataStorageFile);
        this.employees = this.#loadEmployees();
    }

    #loadEmployees () { 
        let employeesPlainText = null;
        try {
           employeesPlainText = fs.readFileSync(this.emloyeesDataStorageFile, 'utf8');
           //console.log('File contents:', employeesPlainText);
           if (employeesPlainText) {
                let employeesLodaded = JSON.parse(employeesPlainText);
                for (let i=0; i<employeesLodaded.length; i++) { // conversion of simple object to kitchen worker object
                   if (employeesLodaded[i].type == 'pastry') {
                      this.employees.push(new PastryChef(employeesLodaded[i].id, employeesLodaded[i].name, employeesLodaded[i].type));
                   }
                   if (employeesLodaded[i].type == 'normal') {
                    this.employees.push(new NormalChef(employeesLodaded[i].id, employeesLodaded[i].name, employeesLodaded[i].type));
                 }
                }
                return this.employees;
           }
           else return [];
        } catch (err) {
            console.error('Error reading file:', err);
            throw err; //shuld not catch the error at all since we can not do anything with it here, only forward it to the invoker
        }
    }

    refreshEmployees() {
        this.employees = this.#loadEmployees();       
    }   

    getEmployees() {
        this.refreshMenuList()
        return this.employees;
    }

    #persistAllEmployees(employees) { //private method, since it does not make sence to call it directly from outside
        let employeesPlainText = JSON.stringify(employees);
        try {
            fs.writeFileSync(this.emloyeesDataStorageFile, employeesPlainText);
                console.log('File written successfully!');
            } catch (err) {
            console.error('Error writing file:', err);
         }
    }

    createAndSaveEmployee(name, type) {
        let id = uuidv4();
        let newlyHiredEmployee = this.#createEmployee(id, name, type); //no need to catch the exception, because we can not do anything with it, we have throw it the invoker
        this.employees[this.employees.length] = newlyHiredEmployee;
        this.#persistAllEmployees(this.employees);
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
        this.#persistAllEmployees(this.employees);
        return employee;
    }

    deleteEmployee(id) {
        this.employees = this.employees.filter(employee => employee.id !== id);
        this.#persistAllEmployees(this.employees);
        return true;
    }

}

//test:

export let hr = new HR();
 console.log(hr.employees);

hr.createAndSaveEmployee("Ákos", "normal");
hr.createAndSaveEmployee("Zsanett", "normal");
hr.createAndSaveEmployee("Krisztián", "normal");
hr.createAndSaveEmployee("Klaudia", "pastry");
hr.createAndSaveEmployee("Norbert", "pastry");

// hr.createAndSaveEmployee("Géza", "pastry");
// hr.createAndSaveEmployee("Bálint", "normal");

// console.log(hr.getEmployee(5));
// console.log(hr.updateEmployee(6, 'Zoltan'));
// console.log(hr.deleteEmployee(4));
// console.log(hr.createAndSaveEmployee("Norbert", "pastry"));

console.log(hr.employees);
