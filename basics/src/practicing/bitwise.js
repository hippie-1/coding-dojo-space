/*
https://nh-fintech-labs.atlassian.net/jira/software/projects/DEV/boards/6?issueParent=10023%2C10198%2C10199%2C10210%2C10200%2C10229%2C10295&selectedIssue=DEV-40
https://www.w3schools.com/js/js_bitwise.asp
*/

// INTEGER TO BINARY

    // Method 1: Using toString Method
    function binaryString (number) {
        return number.toString(2);
    }
    // console.log(binaryString(42)); // Output: "101010"
    // console.log(binaryString(255));
    // console.log(binaryString(682));
    // console.log(binaryString(1682));
    // console.log(binaryString(3521));
    // console.log(binaryString(42865));
    // console.log(binaryString(61445));
    // console.log(binaryString(-5));


    // Method 2: Using Bitwise Operations
    function intToBinary(num) {
        let binary = '';
        while (num > 0) {
            binary = (num % 2) + binary;
            num = Math.floor(num / 2);
        }
        return binary || '0';
    }
    // console.log(intToBinary(42)); // Output: "101010"


    // Method 3: Using Array and map
    function binaryArray(number) {
        return Array.from(number.toString(8)).map(Number);
    }
    // console.log(binaryArray(42)); // Output: [1, 0, 1, 0, 1, 0]


    // ***Method 4: Here’s how you can convert a negative or positive integer to its binary representation in JavaScript LÁSD még: 153.sor
    function integerToBinary(num) {
        if (num >= 0) {
            return num.toString(2);
        } else {
            // For negative numbers, use the two's complement representation
            return (num >>> 0).toString(2);
        }
    }
    // console.log(integerToBinary(10));  // Output: "1010"
    // console.log(integerToBinary(-10)); // Output: "11111111111111111111111111110110"
    // console.log(integerToBinary(-5));
    // console.log(integerToBinary(-8));
    // console.log(integerToBinary(-9));
    // console.log(integerToBinary(-10));


// BINARY STRING TO AN INTEGER

    // 1. Using parseInt Function
    const binaryString2 = "1010";
    const integer = parseInt(binaryString2, 2);
    // console.log(integer); // Output: 10

    // 2. Using Number Constructor
    const binaryString3 = "1010";
    const integer3 = Number("0b" + binaryString3);
    // console.log(integer3); // Output: 10

    // 3. Using reduce Method
    const binaryString4 = "1010";
    const integer4 = binaryString4.split('').reverse().reduce((acc, digit, index) => {
    return acc + digit * Math.pow(2, index);
    }, 0);
    // console.log(integer4); // Output: 10


// INTEGER TO A HEXADECIMAL STRING

    // Method 1: Using toString Method
        let number1 = 255;
        let hexString1 = number1.toString(16);
        // console.log(hexString1); // Output: "ff"

    // Method 2: Using Number.prototype.toString with Padding
        let number2 = 255;
        let hexString2 = number2.toString(16).padStart(2, '0');
        // console.log(hexString2); // Output: "ff"

    // Method 3: Using toString Method with Uppercase
        let number = 255;
        let hexString3 = number.toString(16).toUpperCase();
        // console.log(hexString3); // Output: "FF"


// HEXADECIMAL STRING TO AN INTEGER

    // Method 1: Using parseInt()
        const hexString4 = "1A3F";
        const int4 = parseInt(hexString4, 16);
        // console.log(int4); // Output: 6719

    // Method 2: Using Number()
        const hexString5 = "1A3F";
        const int5 = Number("0x" + hexString5);
        // console.log(int5); // Output: 6719

    // Method 3: Using BigInt
        const hexString6 = "1A3F";
        const int6 = BigInt("0x" + hexString6);
        // console.log(int6); // Output: 6719n


// BITWISE OPERATORS

    // Exercise 1: Bitwise AND (&)
    // Write a function that takes two integers and returns their bitwise AND result.
        function bitwiseAnd(a, b) {
            //return a & b;
            console.log("Numbers to AND in binary:", integerToBinary(a), integerToBinary(b));
            let result = a & b
            console.log("Numbers AND-ed in binary:", integerToBinary(result));
            return result;
        }
        // Example usage:
        // console.log(bitwiseAnd(5, 3)); // Output: 1
        // console.log(bitwiseAnd(5, 8)); // Output: 0

    // Exercise 2: Bitwise OR (|)
    // Write a function that takes two integers and returns their bitwise OR result.
    function bitwiseOr(a, b) {
        console.log("Numbers to OR in binary:", integerToBinary(a), integerToBinary(b));
        let result = a | b;
        console.log("Numbers OR-ed in binary:", integerToBinary(result));
        return result;
    }
    // Example usage:
    // console.log(bitwiseOr(5, 3)); // Output: 7
    // console.log(bitwiseOr(5, 8)); // Output: 13

    // Exercise 3: Bitwise XOR (^)
    // Write a function that takes two integers and returns their bitwise XOR result.
    function bitwiseXor(a, b) {
        console.log("Numbers to XOR in binary:", integerToBinary(a), integerToBinary(b));
        let result = a ^ b;
        console.log("Numbers XOR-ed in binary:", integerToBinary(result));
        return result;
    }
    // Example usage:
    // console.log(bitwiseXor(5, 3)); // Output: 6


    // ***Exercise 4: Bitwise NOT (~) LSD még: 41.sor
    // Write a function that takes an integer and returns its bitwise NOT result.
    function bitwiseNot(a) {
        console.log("Number to negate in binary:", integerToBinary(a));
        let result = ~a;
        console.log("Number negated in binary:", integerToBinary(result));
        return result;
    }
    // Example usage:
    // console.log(bitwiseNot(5)); // Output: -6

    // Exercise 5: Bitwise Shift Left (<<)
    // Write a function that takes an integer and a number of positions to shift, and returns the result of shifting the integer to the left by the given number of positions.
    function shiftLeft(a, position) {
        let bi = integerToBinary(a);
        console.log("Number to shift in binary:", bi);
        let shiftedNum = bi << position; 
        console.log("Number shifted in binary:", integerToBinary(bi << position));
        console.log(shiftedNum); 
    }
    // Example usage:
    console.log(shiftLeft(5, 2)); // Output: 20
    // console.log(shiftLeft(-5, 2)); 
    // console.log(shiftLeft(5, 3)); 
    // console.log(shiftLeft(-5, 3)); 
    // console.log(shiftLeft(20, 2));
    // console.log(shiftLeft(-20, 2));

    // Exercise 6: Bitwise Shift Right (>>)
    // Write a function that takes an integer and a number of positions to shift, and returns the result of shifting the integer to the right by the given number of positions.
    function shiftRight(a, positions) {
        console.log("Number to shift in binary:", integerToBinary(a));
        let shiftedNum = num >> position; 
        console.log("Number shifted in binary:", integerToBinary(shiftedNum));
        console.log(shiftedNum); 
    }
    // Example usage:
    // console.log(shiftRight(20, 2)); // Output: 5
    // console.log(shiftRight(-20, 2)); 
    // console.log(shiftRight(5, 2)); 
    // console.log(shiftRight(-5, 2)); 
    // console.log(shiftRight(5, 3)); 
    // console.log(shiftRight(-5, 3)); 

    // Exercise 7: Bitwise Shift Right with zero filling (>>>)
    // In JavaScript, you can perform a right shift with zero filling using the >>> operator. This operator shifts the bits of a number to the right and fills the leftmost bits with zeros, regardless of the sign of the original number. Here's an example:
    // In this example, the number -8 is right-shifted by 2 bits, and the leftmost bits are filled with zeros, resulting in a positive number.
    function shiftRight1(a, positions) {
        console.log("Number to shift in binary:", integerToBinary(a));
        let shiftedNum = num >>> position; 
        console.log("Number shifted in binary:", integerToBinary(shiftedNum));
        console.log(shiftedNum); 
    }
    // Example usage:
    // console.log(shiftRight1(20, 2)); // Output: 5
    // console.log(shiftRight1(-20, 2)); 
    // console.log(shiftRight1(5, 2)); 
    // console.log(shiftRight1(-5, 2)); 
    // console.log(shiftRight1(5, 3)); 
    // console.log(shiftRight1(-5, 3)); 

    // Exercise 8: Difference between bitwise and logical AND/OR

    // console.log(5 & 3, 5 && 3);
    // console.log(5 | 3, 5 || 3);

 

//These exercises should give you a solid understanding of how bitwise operators work in JavaScript.