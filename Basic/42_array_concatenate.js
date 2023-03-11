

let array1 = ["item1","item2"];
let array2 = array1.slice(0).concat("item4", "item5");

array1.push("item3");
console.log("The value of array1 is:",array1);
console.log("The value of array2 is:",array2);

let flower1 = ["Rose","China Rose"];
let flower2 = [].concat(flower1,["Lily"]);

console.log("The value of flower1 is:",flower1);
console.log("The value of flower2 is:",flower2);

flower1.push("Tube Rose");
console.log("\nAfter Pushing element to flower1 :");
console.log("The value of flower1 is:",flower1);
console.log("The value of flower2 is:",flower2);
