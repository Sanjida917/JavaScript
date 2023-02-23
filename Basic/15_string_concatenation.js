

// string concatenation adds the two string without changing the value

let firstName = "Sanjida";
let lastName = "Mahfuj";

let fullName = firstName + " " +lastName; // it add a whitespace in the middle of two
console.log("My Full Name Is : "+ fullName);

let num1 = "19";
let num2 = "98";

let birthYear = num1+num2; //add two values without changing
console.log("My Birthyear Is :"+birthYear);
console.log("Data Type Of Birth Year Is :"+typeof birthYear);

// But using + operator before string it converts the string value into the number value.
// And therefore by concatening two number values it will sum the number and give a new value.

birthYear = +num1 + +num2;
console.log("The Sum Of Those value Is :"+ birthYear);
console.log("Data Type Of Birth Year Is :"+typeof birthYear);