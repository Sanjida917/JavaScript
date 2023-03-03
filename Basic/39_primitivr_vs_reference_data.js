

// Primitive Data Type
// Primitive values are data that are stored on the stack. Primitive value is stored 
// directly in the location that the variable accesses.
let num1 = 6;
let num2 = num1;

console.log("The value of num1 is:",num1);
console.log("The value of num2 is:",num2);

num1++;
console.log("\nAfter Incrementing num1 :");
console.log("The value of num1 is:",num1);
console.log("The value of num2 is:",num2);


// Reference Data Type
// Reference values are objects that are stored in the heap. Reference value stored in the 
// variable location is a pointer to a location in memory where the object is stored.
let array1 = ["item1","item2"];
let array2 = array1;

console.log("The value of array1 is:",array1);
console.log("The value of array2 is:",array2);

array1.push("item3");
console.log("\nAfter IPushing element to array1 :");
console.log("The value of array1 is:",array1);
console.log("The value of array2 is:",array2);



