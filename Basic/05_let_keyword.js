

// "let" keyword is used to declare variables as like "var" keyword

/* In the case of "var" keyword for declaring a variable we can use var twice for a single variable 
in case of changing the value of the variable. 

Example - var name= "Papon";
          var name = "Mahfuj"; 
OR- 
     var name= "Papon";
         name = "Mahfuj"; 

But in "let" keyword, we can't use it secondly after initialize once for a perticular variable.
We only can use "let" keyword once for a single variable.

Example - let name = "Papon";
          let name = "Mahfuj"; - (This is not valid)

Correct Is - let name = "Papon";
                 name= "Mahfuj";
           
*/

let firstName= "Sanjida";
let lastName="Papon";


console.log("Full Name Is : "+firstName,lastName);

lastName = "Mahfuj";

console.log("Full Name Is : "+firstName,lastName);

// block scope vs funtion scope 

