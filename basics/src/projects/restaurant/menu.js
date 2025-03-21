import * as fs from 'node:fs';

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
    menuItemsDataStorageFile = 'menuItems.txt';
    
    constructor() {
        this.menuList = this.#loadMenuItems();
        console.log('Menu items converted back to array:', this.menuList);
        // this.#persistAllMenuItems(this.menuList);
    }

    #persistAllMenuItems(menuList) {
        let menuItemsPlainText = JSON.stringify(menuList);
        try {
            fs.writeFileSync(this.menuItemsDataStorageFile, menuItemsPlainText);
            console.log('File written successfully!');
            } catch (err) {
            console.error('Error writing file:', err);
         }
    }

    #loadMenuItems () {
        try {
                let menuItemPlainText = fs.readFileSync(this.menuItemsDataStorageFile, 'utf8');
                console.log('File contents:', menuItemPlainText);
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

export let menu = new Menu();
console.log(menu.menuList);
