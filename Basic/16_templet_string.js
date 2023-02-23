

let myName = "Sanjida Mahfuj";
let age = 22;

//"My Name Is Sanjida Mahfuj And I'm 22 Years Old." - for writing this way we has to follow this way -
 let aboutMe = "My Name Is "+myName+" And I'm "+age+" Years Old.";
 console.log(aboutMe);

 //But using "templet string" we can write this in useful way.
 aboutMe = `My Name Is ${myName} And I'm ${age} Years Old.`
 console.log(aboutMe);
