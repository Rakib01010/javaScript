//2.spreadOperator.js
let p=['rakib','rasib'];
let q=['hasib', 'sadid'];

const e=[...p,...q];
console.log(e); // [ 'rakib', 'rasib', 'hasib', 'sadid' ]
// another way
p.push(q); 
console.log(p.concat(q)) //[ 'rakib', 'rasib', 'hasib', 'sadid' ]
//now we will add another array
let v=['ami','tmi'];
const f=[...p,...q,v]; //[ 'rakib', 'rasib', 'hasib', 'sadid' ]

