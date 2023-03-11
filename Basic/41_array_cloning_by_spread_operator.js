

/* 
Spread operator in ES6 will be used to clone an array. This operator will bring out 
shallow copy of the existing array. Usage of spread operator will create a new array 
for putting the elements which are been copied from existing array.
*/

let array1 = ["Sanjida","Mahfuj"];
let array2 = [... array1];

console.log("The value of array1 is:",array1);
console.log("The value of array2 is:",array2);

console.log(array1===array2);


array1.push("Papon");  //The push() method adds one or more elements to the end of an array
console.log("\nAfter Pushing element to array1 :");
console.log("The value of array1 is:",array1);
console.log("The value of array2 is:",array2);
console.log(array1===array2);


array1.unshift("Tuhin");  //The unshift() method adds one or more elements to the beginning of an array. 
console.log("\nAfter Unshifting element to array1 :");
console.log("The value of array1 is:",array1);
console.log("The value of array2 is:",array2);
console.log(array1===array2);