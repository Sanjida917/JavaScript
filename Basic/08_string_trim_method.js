

// The trim() is a built-in method which is used to removes the whitespaces/backspaces 
// from both ends of the string and return a new string, without modifying the original string.

let firstName = "   Sanjida  "
console.log("The length before trimming :"+firstName.length);
console.log("The new value before trimming :"+firstName); 

firstName.trim();


// It doesn't print the new value/trimmrd value because JavaScropt string is  immutable, which means
// once a string object is assigned to string reference, the object value cannot be changed.
// We have to assign it to a new variable to get the desire value.

console.log("The immutable string length : "+firstName.length);  // same index number 
console.log("The immutable string :"+firstName);    // same value


console.log("The new string is :"+firstName.trim()); // This Way will be worked out.


// now I create a new variable and store the value on it and then print it out.

let trimmedName = firstName.trim();
console.log("The length after trimming :"+trimmedName.length);
console.log("The new value after trimming :"+trimmedName);


// This way also valid for trim() the string with same variable name. But the fact is it's must to have 
// the variable to put the trimmed value which may be the same variable name. 

firstName = firstName.trim();
console.log("The length after trimming :"+firstName.length);
console.log("The new value after trimming :"+firstName);

