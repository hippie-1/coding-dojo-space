import { Menu } from './menu.js';

let menu = new Menu();

function initMenuItems() {
    menu.createAndSaveMenuItem('chocolate', 'sweet', 3000);
    menu.createAndSaveMenuItem('Coffee', 'sweet', 1000);
    menu.createAndSaveMenuItem('Coconut Milk', 'sweet', 1000);
    menu.createAndSaveMenuItem('cake', 'sweet', 5000);
    menu.createAndSaveMenuItem('muffin', 'sweet', 4000);
    menu.createAndSaveMenuItem('Chicken', 'normal', 5000);
    menu.createAndSaveMenuItem('Lamb', 'normal', 7000);
    menu.createAndSaveMenuItem('Beef', 'normal', 8000);
    menu.createAndSaveMenuItem('Soup', 'normal', 4000);
    menu.createAndSaveMenuItem('Salad', 'normal', 2000);
    menu.createAndSaveMenuItem('Pasta', 'normal', 5000);    
}

//initMenuItems();

console.log(menu.menuList);
menu.createAndSaveMenuItem('Duck', 'normal', 7000);
menu.createAndSaveMenuItem('CezarSalad', 'normal', 5000);
console.log(menu.menuList);