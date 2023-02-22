

let myLove = "mahfuj";

myLove.toUpperCase();

// It will not work because of immutable string.
console.log(myLove); 

console.log(myLove.toUpperCase());  // That will work


//The best way is to store the value/string on a new variable/ previous variable again

let love= myLove.toUpperCase();
console.log(love); 

//It is also possible

myLove= myLove.toUpperCase();
console.log(myLove); 