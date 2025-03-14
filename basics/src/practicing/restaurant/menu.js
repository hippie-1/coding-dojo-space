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

class Menu {
    menuList;
    
    constructor() {
        this.menuList = this.createMenu();
    }

    createMenu () {
        let menu = [
            new Sweetness(0, 'chocolate', 3000),
            new Sweetness(1, 'Coffee', 1000),
            new Sweetness(2, 'Coconut Milk', 1000),
            new Sweetness(3, 'cake', 5000),
            new Sweetness(4, 'muffin', 4000),
            new NormalFood(5, 'Chicken', 5000),
            new NormalFood(6, 'Lamb', 7000),
            new NormalFood(7, 'Beef', 8000),
            new NormalFood(8, 'Soup', 4000),
            new NormalFood(9, 'Salad', 2000),
            new NormalFood(10, 'Pasta', 5000)
        ]
        return menu;
    }
}

let menu = new Menu();
console.log(menu.menuList);
