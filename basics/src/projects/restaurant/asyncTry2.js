let myPromise = new Promise((resolved, reject) => {
    // Asynchronous operation
    setTimeout(() => {
        resolved("Success!"); // Operation successful
    }, 1000);
});

myPromise
.then((value) => `${value} and more`)
//.then((value) => {console.log(value)})
.then((value) => {console.log(someFunction(value))});

function someFunction(input) {
    console.log("haho");
    return input + " haho"
}

const someFunction2 = (input) => input + " someFunc2";

/*
myPromise
.then((value) => `${value} and more`)
.then((value) => `${value} and even more`)
.then((value) => { console.log(value); })
.catch((error) => { console.error(error); });
*/
/*
myPromise.then(
    (value) => { console.log(value); }, // Success handler
    (error) => { console.error(error); } // Error handler
);
*/
console.log(myPromise);
await myPromise;
console.log(myPromise);