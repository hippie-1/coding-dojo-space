import * as fs from 'node:fs';
//import * as uuidv4 from 'node:uuid';
import { uuidv4 } from '../../util/BasicFunctions.js';

class MenuItem {
    id;
    name;
    type;
    estPrepTime;
    
    
    constructor (id, name, estPrepTime) {
        this.id = id;
        this.name = name;
        this.estPrepTime = estPrepTime;
    }
}

class Sweetness extends MenuItem {

    constructor (id, name, estPrepTime) {
        super(id, name, estPrepTime);
        this.type = 'sweet';
    }

}
class NormalFood extends MenuItem {

    constructor (id, name, estPrepTime) {
        super(id, name, estPrepTime);
        this.type = 'normal';
    }
}

export class Menu {
    menuList;
    menuStorageFile = 'menuItems.json';
    
    constructor() {
        this.menuList = this.#loadMenuItems();
        // console.log(this.menuList);
        // console.log('Menu items converted back to array:', this.menuList);
        // this.#persistAllMenuItems(this.menuList);
    }

    #persistAllMenuItems(menuList) {
        let menuItemsPlainText = JSON.stringify(menuList);
        try {
            fs.writeFileSync(this.menuStorageFile, menuItemsPlainText);
            console.log('File written successfully!');
            } catch (err) {
            console.error('Error writing file:', err);
         }
    }
    
    // #persistAllMenuItems(menuList) {
    //     let menuItemsPlainText = JSON.stringify(menuList);
    //     fs.writeFile(this.menuStorageFile, menuItemsPlainText, (err) => {
    //         if (err) {
    //             console.error('Error writing file:', err);
    //             return;
    //         }
    //         console.log('File written successfully!');
    //     })
    // }

    #loadMenuItems () {
        try {
                let menuItemPlainText = fs.readFileSync(this.menuStorageFile, 'utf8');
                //console.log('File contents:', menuItemPlainText);
                if (menuItemPlainText) {
                    let menuItems = JSON.parse(menuItemPlainText);
                    return menuItems;
                }
                else return [];
            } catch (err) {
                console.error('Error reading file:', err);
                throw err; //shuld not catch the error at all since we can not do anything with it here, only forward it to the invoker
            }
    }

    refreshMenuList() {
        this.menuList = this.#loadMenuItems();       
    }   

    getMenuList() {
        this.refreshMenuList()
        return this.menuList;
    }
    
    #createMenuItem (id, name, type, estPrepTime) {
        switch(type) {
            case 'sweet':
                return new Sweetness(id, name, estPrepTime);
            case 'normal': 
                return new NormalFood(id, name, estPrepTime);
            default:
                throw new Error(
                    `Invalid class type "${type}". Choose one of: "normal", "sweet"`
                )
        }
    }

    createAndSaveMenuItem(name, type, estPrepTime) {
        //let id = this.menuList.length;
        const uuid = uuidv4();
        console.log(uuid);
        let newMenuItem = this.#createMenuItem(uuid, name, type, estPrepTime);
        this.menuList.push(newMenuItem);
        this.#persistAllMenuItems(this.menuList);
    }

    getMenuItem1(id) {
        let menuItemFound = this.menuList.filter(element => element.id == id);
        if(menuItemFound[0]) {
            return menuItemFound[0];
        } else {
            throw new Error(`Menu item with id ${id} not found`);
        }
    }

    getMenuItemBest(id) {
        let menuItemFound = this.menuList.find(element => element.id == id);
        if(menuItemFound) {
            return menuItemFound;
        } else {
            throw new Error(`Menu item with id ${id} not found`);
        }
    }

    getMenuItem3(id) {
        let menuItemIndexFound = this.menuList.findIndex(element => element.id == id);
        let menuItemFound = this.menuList[menuItemIndexFound];
        if(menuItemFound) {
            return menuItemFound;
        } else {
            throw new Error(`Menu item with id ${id} not found`);
        }
    }

    updateMenuItem(id, key, newValue) {
        let menuItem = this.getMenuItemBest(id);
        let keys = Object.keys(menuItem);
        let keytoBeChanged = keys.find(elementkey => elementkey == key);
        menuItem[keytoBeChanged] = newValue;
        this.#persistAllMenuItems(this.menuList);
        return menuItem;
    }

    deleteMenuItem(id) {
        this.menuList = this.menuList.filter(element => element.id !== id);
        this.#persistAllMenuItems(this.menuList);
        return true;
    }

    // createMenu () {
    //     let menu = [
    //         new Sweetness(0, 'chocolate', 3000),
    //         new Sweetness(1, 'Coffee', 1000),
    //         new Sweetness(2, 'Coconut Milk', 1000),
    //         new Sweetness(3, 'cake', 5000),
    //         new Sweetness(4, 'muffin', 4000),
    //         new NormalFood(5, 'Chicken', 5000),
    //         new NormalFood(6, 'Lamb', 7000),
    //         new NormalFood(7, 'Beef', 8000),
    //         new NormalFood(8, 'Soup', 4000),
    //         new NormalFood(9, 'Salad', 2000),
    //         new NormalFood(10, 'Pasta', 5000)
    //     ]
    //     return menu;
    // }
}


//test:
//let menu = new Menu();
// menu.createAndSaveMenuItem('chocolate', 'sweet', 3000);
// menu.createAndSaveMenuItem('Coffee', 'sweet', 1000);
// menu.createAndSaveMenuItem('Coconut Milk', 'sweet', 1000);
// menu.createAndSaveMenuItem('cake', 'sweet', 5000);
// menu.createAndSaveMenuItem('muffin', 'sweet', 4000);
// menu.createAndSaveMenuItem('Chicken', 'normal', 5000);
// menu.createAndSaveMenuItem('Lamb', 'normal', 7000);
// menu.createAndSaveMenuItem('Beef', 'normal', 8000);
// menu.createAndSaveMenuItem('Soup', 'normal', 4000);
// menu.createAndSaveMenuItem('Salad', 'normal', 2000);
// menu.createAndSaveMenuItem('Pasta', 'normal', 5000);
// console.log(menu.getMenuItemBest(0));
// console.log(menu.updateMenuItem(0, 'estPrepTime', 5000));
// console.log(menu.deleteMenuItem(0));
// console.log(menu.menuList);
// menu.createAndSaveMenuItem('Lamb', 'normal', 7000);
// menu.createAndSaveMenuItem('Chicken', 'normal', 5000);
// console.log(menu.menuList);
