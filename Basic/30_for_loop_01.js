
//pring from 0 to 100

for(let i=0; i<=10; i++){
    console.log(i);
}

// 'let' is not access the variable to run outside of the loop which declared inside the loop
// console.log(i);   --> Doesn't possible


for(var i=0; i<=10; i++){
    console.log(i);
}


//"var" variable access to run outside the loop
console.log(`Current Value of i is: ${i}`);
