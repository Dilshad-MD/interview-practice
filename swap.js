// Using Arithmetic Operators
console.log("=========first method");
let a = 10;
let b = 2;

a = a + b; // a= 10+2  a = 12
b = a - b; // b = 12-2  b = 10
a = a - b; // a = 12-10  a = 2
console.log(a);
console.log(b);

//  Using Bitwise XOR operator
console.log("=========second method");
let c = 4; // in the binary terms
let d = 8;
c = c ^ d; //  4 --> 0100  ; 8 --> 1000  // a = 1100
d = c ^ d; //  1100^1000       // 0100 //4
c = c ^ d; //  1100^0100   // 1000  //8
console.log(c);
console.log(d);

console.log("=========third method"); // Using es6(ES2015) Destructuring assignment

let g = 4;
let h = 9;
[g, h] = [h, g]; // exchange the value
console.log(g);
console.log(h);

console.log("=========forth method"); // one line notetion
let e = 4;
let f = 6;
e = f + ((f = e), 0); // a = b + 0
console.log(e);
console.log(f);

console.log("=========fifth method");
let i = 4;
let j = 7;
i = (i * j) / (j = i); // (36)/4
console.log(i);
console.log(j);

console.log("=========sixth method"); //  Using a Temporary Variable

let k = 10;
let l = 20;
let temp;

temp = k;
k = l;
l = temp;
console.log(k);
console.log(l);
