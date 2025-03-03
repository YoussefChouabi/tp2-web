const readline = require('readline-sync');
let chaine =readline.question("entre un mot: ");
let inverse=chaine.split('').reverse().join('');
let estpalindrome = chaine ==inverse? true: false;
console.log(estpalindrome);