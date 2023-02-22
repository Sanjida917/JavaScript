

//This method is used to convert the string from Upper case into Lower Case.

let myName = "SANJIDA MAHFUJ";

myName.toLowerCase();

// It will not work because of immutable string.
console.log("Immutable string :"+myName); 

console.log(myName.toLowerCase());  // That will work


//The best way is to store the value/string on a new variable/ previous variable again

let name= myName.toLowerCase();
console.log(name); 

//It is also possible

myName= myName.toLowerCase();
console.log(myName); 