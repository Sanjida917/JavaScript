

// Falsey values are those, which gives "false" result
// Some falsey values are - false, "", null, undefined, 0

let value = ""; //same result for - false, null, undefined, 0

// Here "" - it gives the false, so the condition is false and print the else result.
if(value){
    console.log("This Is A truthey value");
} else{
    console.log("This Is a falsey value");
}

// Truthey values - Without the falsey values The all others are the truthey vaues.
// Examples Are - "abc", 123, " " etc

value = -1;

// here the condition is true because of the truthey values.
if(value){
    console.log("This Is A truthey value");
} else{
    console.log("This Is a falsey value");
}
