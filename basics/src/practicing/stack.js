class Stack {
    #stackArray
    #maxSize

    constructor(maxSize){
        if (maxSize < 0) {
            throw new Error("Stack size cannot be nagative!")
        }
        this.#stackArray = []
        this.#maxSize = maxSize;
    }

    push(elem) {
        if (this.#stackArray.length == this.#maxSize) {
            throw new Error("Stack is full!");
        }
        else {
            this.#stackArray.push(elem);
        }
    }

    pop() {
        if (this.#stackArray.length > 0) {
            return this.#stackArray.pop();
        }
        else {
            throw new Error("Stack is empty!");
        }
    }

    peak() {
        if (this.#stackArray.length > 0) {
            return this.#stackArray.at(-1);
        }
        else {
            throw new Error("Stack is empty!");
        }
    }
}

const stack = new Stack(16);
const text = "Gørøg";
try {
    for (let i=0; i < text.length; i++) {
        stack.push(text[i]);
    }
    while (stack.peak()) {
        console.log(stack.pop());
    }
}
catch (e) {
    console.log(e.message);
}

const crate = new Stack(8);
const tools = ["hammer", "wrench", "pliers", "drill", "screwdriver", "saw", "tape measure", "level"];
try {
    tools.forEach((tool) => crate.push(tool));
    while (crate.peak() !== "screwdriver") {
        console.log(`Found ${crate.pop()}, but looking for screwdriver...`)
    }
    console.log(`Finally found the ${crate.pop()}!`)
}
catch (e) {
    console.log(e.message);
}
