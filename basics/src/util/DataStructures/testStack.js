import { Stack } from '../../util/DataStructures/Stack.js'


const hardwareStack = new Stack();
const tools = ["hammer", "wrench", "pliers", "drill", "screwdriver", "saw", "tape measure", "level", "scissors", "gereblye", "ásó"];
try {
    tools.forEach((tool) => hardwareStack.push(tool));
    }
catch (e) {
    console.log(e.message);
}
do {
    try {
        var currentHardware = hardwareStack.pop();
    }
    catch (e) {
        console.log(e.message);
        break;
    }
    console.log(`Found ${currentHardware}, but looking for zokni...`)
}
while (currentHardware != "zokni")

