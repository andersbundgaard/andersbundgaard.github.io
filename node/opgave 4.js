console.log('Opgave 4')
console.log ('Med while funktion')
console.log ('Fra x=1 til x=10')
let x=0
let y=0
while(x < 11){
    y=3*x*x+6*x+9
    console.log (y)
    x = x+1;
}
console.log('Fra x=10 til x=100')
while(x <= 100){
    y=3*x*x+6*x+9
    console.log (y)
    x = x+10;
}

console.log ('Med for funktion')
for (let i = 0; i <= 100; i++){
    let x = i * 10;
    let y = 3 * x * x + 6 * x + 9
    console.log (x + " : "+ y);
}