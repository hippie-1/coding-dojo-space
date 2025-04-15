import { NormalChef } from "./employee.js";
import { sleepAsync } from "../../util/BasicFunctions.js";
import { Order } from "./order.js";
import { NormalFood } from "./menu.js";



async function getAvailableChef(ms, id, name) {
    console.log("getAvailableChef started");
    await sleepAsync(ms);
    console.log("getAvailableChef finished");
    //throw new Error("Chef not found");
    return new NormalChef(id, name);
}

//test1

await Promise.all([getAvailableChef(1000, 1, "Zoltán"), getAvailableChef(1000, 2, "Krisztián")])
.then  ((value) => {
        console.log("Chef successfully found: ");
        console.log(value);
        value[0].prepareingDish(new Order(1, new NormalFood(1, "Ujházi tyúkhúsleves"), "accepted", "")); // ez is async, amit nem várun meg
        value[1].prepareingDish(new Order(2, new NormalFood(2, "Csirkemáj krumplival"), "accepted", "")); // ez is async, amit nem várun meg
    }
)
.catch ((value) => console.log("Error"))
.finally ((value) => console.log("Finally let's close conncetions to finish the program correctly"));

console.log("All finished");
console.log(".................");

//test2
const t1 = getAvailableChef(3000, 3, "Réka");
const t2 = getAvailableChef(1000, 4, "Gyöngyi");
console.log(t1);
console.log(t2);
t1.then((value) => value.prepareingDish(new Order(1, new NormalFood(3, "Hagymás rostélyos"), "accepted", "")) );
t2.then((value) => value.prepareingDish(new Order(2, new NormalFood(4, "Pisztráng rizzsel"), "accepted", "")) );




