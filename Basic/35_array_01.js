
//Arrays are used to store multiple values in a single variable.
//Array is reference type variable and it is ordered collection of values.

let fruits = ["Mango","Apple","Orange"];
console.log(fruits);


let numbers = [1,2,3,4,5];
console.log(numbers);

let mixed =["Sanjida",1,5,null,undefined]; //we can store any type data
console.log(mixed);

// Array is mutable.It means we can change data of an array
// We can access any particular object from an array by its index number

fruits[0]="Banana";
console.log("After Changing The Value :",fruits);


//Reference types are Object. So in JavaScript Arrays are object.
console.log("Arrays are:",typeof fruits);