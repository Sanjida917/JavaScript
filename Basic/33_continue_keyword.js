

// The continue statement is used to skip the current iteration of the loop 
// and the control flow of the program goes to the next iteration.

for(var i =0; i<=10; i++){

    if(i===5){
        continue;
    }
    
    console.log(i);
}

console.log(`The Current value of i Is ${i}`)