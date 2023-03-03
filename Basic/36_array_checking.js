

let fruit = ["Orange","Apple","Banana"];

//Objects are declared by curly braces "{}"
//This is object literals but this is not an array
let obj = {}; 

console.log("Object type :",typeof obj);
console.log("Array type :",typeof fruit);

//Now we can check the array and object are array type or not

console.log("fruits is array:", Array.isArray(fruit));
console.log("obj is array:", Array.isArray(obj));