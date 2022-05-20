// javascript variable keyword : var, let, const

var var1 = 'a';
let let1 = 'b';
const const1 = 'con';

function varibaleFunction() {
    let let2 = 'c';
    var1 = 'a-1';
    let1 = 'b-1';
    console.log('varibaleFunction var1 : ' + var1);  // a-1
    console.log('varibaleFunction let1 : ' + let1);  // b-1
    console.log('varibaleFunction let2 : ' + let2);  // c
}

function varibaleFunction2() {
    var var1 = 'a-2';
    let1 = 'b-2';
    console.log('varibaleFunction2 var1 : ' + var1);  // a-2
    console.log('varibaleFunction2 let1 : ' + let1);  // b-2
    // console.log('let2 : ' + let2);  // error
}

console.log('first var1 : ' + var1);  // a
console.log('first let1 : ' + let1);  // b
// console.log('let2 : ' + let2);   // error

varibaleFunction();

console.log('second var1 : ' + var1);  // a-1
console.log('second let1 : ' + let1);  // b-1
// console.log('let2 : ' + let2);  // error

varibaleFunction2();

console.log('third var1 : ' + var1);    // a-1
console.log('third let1 : ' + let1);    // b-2

// const1 = 10; // error