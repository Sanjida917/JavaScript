

let age = 10;
let drink;

if(age>=10){
    drink = "Coffee";
}else{
    drink= "Milk";
}

console.log("Drink",drink);

//The Ternary Operator is Useful and Easy For Above operation.
//The Ternary Operator also known as "Conditional" Operator.

//If condition is true then it ptint the first part.If not then it prints the other last one.
drink = age>=10 ? "COffee" : "Milk" ; 
console.log(drink,`Is suitable drink for ${age} years old.`);