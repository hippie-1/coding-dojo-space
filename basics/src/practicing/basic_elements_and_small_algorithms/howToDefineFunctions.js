
//Defining Functions
function square1(number) {
    return number * number;
}

//Function Expressions
const square2 = function (number) {
    return number * number;
};

//Calling Functions
let result = square1(3);
console.log(result); // 25



//Function Parameters and Arguments
//JavaScript functions can handle default parameters and rest parameters. Default parameters allow you to specify default values for parameters, while rest parameters allow you to handle an indefinite number of arguments as an array:
function multiply(a, b = 2) {
    return a * b;
}
console.log(multiply(3));
    
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));

//Arrow Functions
const add = (a, b) => a + b;
console.log(add);
console.log(add(1,2));



//Closures
function outerFunction(x=1) {
    return function innerFunction(y=2) {
        return function innerInnerFunction(z=3) {
            return x + y + z;
        }
    };
}
    
const addInner = outerFunction(2);
console.log(addInner);
const addInnerInner = addInner(5);
console.log(addInnerInner);
console.log(addInnerInner(18));
//console.log(addFive(3)); // 8


//Function Hoisting
console.log(square3(5)); // 25
function square3(n) {
    return n * n;
}


console.log(square4(5)); // ReferenceError: Cannot access 'square4' before initialization
const square4 = function (n) {
    return n * n;
};

/*
https://www.bing.com/search?qs=CT&pq=javascript+function&sk=CSYN1&sc=15-19&pglt=2339&q=javascript+functions&cvid=a1e7cdf397cb476b923a6ad82245f293&gs_lcrp=EgRlZGdlKgcIABAAGPkHMgcIABAAGPkHMgYIARBFGDkyBggCEAAYQDIGCAMQABhAMgYIBBAAGEAyBggFEAAYQDIGCAYQABhAMgYIBxAAGEAyBggIEAAYQNIBCDg2MDJqMGoxqAIIsAIB&FORM=ANNTA1&ucpdpc=UCPD&PC=U531
https://www.w3schools.com/js/js_functions.asp



*/