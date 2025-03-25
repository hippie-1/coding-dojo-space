import { Menu } from './menu.js';

let menu = new Menu();

function initMenuItems() {
    menu.createAndSaveMenuItem('chocolate', 'sweet', 3000, 1500);
    menu.createAndSaveMenuItem('Coffee', 'sweet', 1000, 1200);
    menu.createAndSaveMenuItem('Coconut Milk', 'sweet', 1000, 1200);
    menu.createAndSaveMenuItem('cake', 'sweet', 5000, 1400);
    menu.createAndSaveMenuItem('muffin', 'sweet', 4000, 1600);
    menu.createAndSaveMenuItem('Chicken', 'normal', 5000, 2000);
    menu.createAndSaveMenuItem('Lamb', 'normal', 7000, 4000);
    menu.createAndSaveMenuItem('Beef', 'normal', 8000, 3000);
    menu.createAndSaveMenuItem('Soup', 'normal', 4000, 1500);
    menu.createAndSaveMenuItem('Salad', 'normal', 2000, 1800);
    menu.createAndSaveMenuItem('Pasta', 'normal', 5000, 1700);    
}

initMenuItems();

console.log(menu.menuList);
//menu.createAndSaveMenuItem('Duck', 'normal', 7000, 3400);
//menu.createAndSaveMenuItem('CezarSalad', 'normal', 5000, 2200);
//menu.createAndSaveMenuItem('Garnela', 'normal', 1000, 3400);
//menu.createAndSaveMenuItem('Salmon', 'normal', 1000, 4200);
//console.log(menu.menuList);
