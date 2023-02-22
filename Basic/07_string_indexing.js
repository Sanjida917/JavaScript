

// String indexing 
//Index starts from 0

let firstName = "SanjidaMahfuj";

//  S    a   n   j   i   d   a 
//  0    1   2   3   4   5   6
// length of string 
// firstName.length 

console.log(firstName[0]);
console.log(firstName[7])

//length starts from 1
console.log(firstName.length);  

console.log(firstName[firstName.length-2]);

// last Index : length - 1 
console.log(firstName[firstName.length-1]);

//spaces are counted as the length and indexing

let lastName = "Papon ";

console.log("Length of Papon Is : "+lastName.length);  
console.log("Last Index is :"+lastName[lastName.length-1]);