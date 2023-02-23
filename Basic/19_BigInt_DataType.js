

let number = 1234;
console.log(number);

// "MAX_SAFE-INTEGER" is the maximum range of integer number in JavaScript.
console.log("Maximum integer Number range in JS Is : "+Number.MAX_SAFE_INTEGER); 

//BigInt is a premitive data type which can store a very big integer which is normally out of range or bigger than MAX_SAFE-INTEGER".
// let number2 = 123456789000987654224567890;
// console.log(number2);  not possible to print the exact given number.

let number2 = BigInt(1234524577776555555678900);
console.log("The BigInt Number Is : "+number2);

//using "n"- after given integer number is to convert the BigInt Number
let number3 = 1234567891011121314151617181920n;
console.log("The BigInt Number Is : "+number3);


// We can Add two BigInt Number Easily.
let num1 = 120n;
let num2 = BigInt(10);

let sum = num1 + num2;

console.log("Sum Of the Bigint Is : "+sum);

//But We can't a BigInt And A Normal Integer Number like this -
// let num3 = 10;
// let sum2 = num2 + num3; [Here num2 is BigInt Number And num3 is a nornal Integer]

//It Will Shows "Cannot mix BigInt and other types, use explicit conversions" - Error
// console.log(sum2); --> Not Possible