

let number1 = 20;
let number2 = 30;
let number3 = 20;

//Comparison operator compare among the values and always return "true" or "false".
// "==, ===, !=, !==, >, <, >=, <= " - Those Are Comparison Oprators.

console.log("20>30 : ", number1>number2);
console.log("20>=20 : ", number1>=number3);
console.log("30>=20 : ",number2>=number3);

let num1 = 10;
let num2 = 10;
let num3 = "10"; //This is A string Variable undoubtly

//The " == " - operator checks only the value is true or false.It doesn.t check 
//the data type of the value. This type operation only works in JavaScript, not other languages.
console.log("10 == 10 : ",num1 == num2);

//It didn't check the data type of the value.
console.log("'10' == 10 : ",num2 == num3); // -->true

let num4 = "20";
let num5 = "20";
console.log("10 == '20' : ",num2 == num4);
console.log("'10' == '20' : ",num3 == num4);

//The " === " - operator checks the value And Also The data types.
//If The value And data types both are equal then it gives true otherwise it is false.

console.log("10 === 10 : ",num1 === num2);

//it gives false because of diffent data types
console.log("'10' === 10 : ",num2 === num3); 
console.log("10 === '20' : ",num2 === num4);

//Gives true because both are equal
console.log("'20' === '20' : ",num4 === num5);

//!= gives the boolean result(true/false).If compare values are not equal it gives truth.
//Doesn't count the data types only count the values

console.log("10!='10' : ",num2 != num3);
console.log("'20' != '20' :",num4 != num5);
console.log("10 != '20' :",num2 != num4);

//!== gives the boolean result(true/false).If compare values and data types are not equal it gives truth.
//It count both of the data types and values .

console.log("10!=='10' : ",num2 !== num3);
console.log("'20' !== '20' :",num4 !== num5);
console.log("10 !== '20' :",num2 !== num4);