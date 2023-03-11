
// By spread operator

let flower1 = ["Rose","China Rose"];
let flower2 = [...flower1,"Lily"];

console.log("The value of flower1 is:",flower1);
console.log("The value of flower2 is:",flower2);

flower1.push("Tube Rose");
console.log("\nAfter Pushing element to flower1 :");
console.log("The value of flower1 is:",flower1);
console.log("The value of flower2 is:",flower2);

console.log("----------------------------------------------------------------------------");

let flower3 = ["Jui"]
let flower4 = ["Sunflower","Orchid"];
let flower5 = [...flower3, ...flower4];

console.log("The value of flower3 is:",flower3);
console.log("The value of flower4 is:",flower4);
console.log("The value of flower5 is:",flower5);

flower3.push("Beli");
flower4.push("Gardenia");
console.log("\nAfter Pushing element to flower3 and flower4:");
console.log("The value of flower3 is:",flower3);
console.log("The value of flower4 is:",flower4);
console.log("The value of flower5 is:",flower5);

