
//Adding the first 100 numbers

//This is a linear type and this process is comparatively slow than constant type.
let i=0;
let total = 0;

while(i<=100){
    total = total+i;
    i++;
}
console.log(total);

//this is a formula of constant type process for very fastest way to result

let num = 100;
total = (num*(num+1))/2;
console.log(total);