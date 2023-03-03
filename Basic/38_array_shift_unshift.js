
// The unshift() method adds one or more elements to the beginning of an array. 
// The unshift() method overwrites the original array. 

let flower = ["Tuberose","Rose","Lily"];
console.log(flower);

flower.unshift("Orchid");
console.log(flower);

flower.unshift("Lotus","Sunflower");
console.log(flower);

//The shift() method in JavaScript removes an item from the beginning of an array and 
//shifts every other item to the previous index.

let country = ["America","Bangladesh","Israil","Vutan"];
console.log(country);

let shiftedcountry=country.shift();
console.log(shiftedcountry);
console.log(country);

//push() and pop() are fastest as copare to shift() and unshift()