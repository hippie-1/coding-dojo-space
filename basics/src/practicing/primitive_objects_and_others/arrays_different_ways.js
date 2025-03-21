// let myArray = [2, 4, 6, 8];
// myArray[myArray.length] = 10;
// console.log(myArray[125]);

// for (let i=0; i<myArray.length; i++) {
//     console.log(myArray[i]);
// }

// let myArray2 = [];
// for (let i=0; i<10; i++) {
//     myArray2.push(2 + i*5);
// }
// console.log(myArray2.join(", "));



let myObject1 = { 
    name: "John",
    age: 4,
    city: "Debrecen"
  };


  let myObject2 = { 
    name: "John",
    age: 3,
    city: "Debrecen"
  };


  let myObject3 = {
    name: "John",
    age: 3,
    city: "Debrecen"
  };

  let myArray3 = [myObject1, myObject2, myObject3];
  console.log(myArray3);
let haromEvesek = myArray3
    .filter(element => element.age==3)
    .map(element => element.city = "Pásztó"); //Let's fix it
console.log(haromEvesek);



