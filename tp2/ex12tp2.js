const readline = require('readline-sync');
let n1 =readline.questionFloat("entre votre note: ");
let n2 =readline.questionFloat("entre votre note: ");
let n3 =readline.questionFloat("entre votre note: ");

let coefficient1 =readline.questionFloat("entre votre coefficient: ");
let coefficient2 =readline.questionFloat("entre votre coefficient: ");
let coefficient3 =readline.questionFloat("entre votre coefficient: ");
let somme_de_coefficients=coefficient1+coefficient2+coefficient3;
let les_note = (n1*coefficient1)+(n2*coefficient2)+(n3*coefficient3);
let total =les_note/somme_de_coefficients;
console.log(total);