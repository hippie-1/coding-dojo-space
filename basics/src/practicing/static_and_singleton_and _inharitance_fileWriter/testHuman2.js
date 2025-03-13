import {Human} from './human.js'

export function showHuman () {
    let human = Human.getInstance();
    console.log("testHuman2")
    console.log(human.toString());
}
