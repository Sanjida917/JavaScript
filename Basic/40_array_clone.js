
//in this after pushing a value on array1, the array2 also added that value

let array1 = ["item1","item2"];
let array2 = array1;

array1.push("item3");  //The push() method adds one or more elements to the end of an array

console.log("The value of array1 is:",array1);
console.log("The value of array2 is:",array2);

console.log(array1===array2);

//in this after pushing a value on array1, the array2 doesn't that value on it
//This called Array cloning

let array3 = ["item3","item4"];
let array4 = array3.slice(0);

console.log("\nThe value of array3 is:",array3);
console.log("The value of array4 is:",array4);

array3.push("item5");
console.log("\nAfter Pushing element to array3 :");
console.log("The value of array3 is:",array3);
console.log("The value of array4 is:",array4);
console.log(array3===array4);

array3.unshift("item6");  //The unshift() method adds one or more elements to the beginning of an array.
console.log("\nAfter unshifting element to array3 :");
console.log("The value of array3 is:",array3);
console.log("The value of array4 is:",array4);
console.log(array3===array4);

//This is another way to cloning array
//The concat() method concatenates (joins) two or more arrays. 
//The concat() method returns a new array, containing the joined arrays.

let array5 = ["item8","item9"];
let array6 = [].concat(array5);

console.log("\nThe value of array3 is:",array5);
console.log("The value of array4 is:",array6);

array5.push("item10");
console.log("\nAfter Pushing element to array5 :");
console.log("The value of array5 is:",array5);
console.log("The value of array6 is:",array6);
console.log(array5===array6);