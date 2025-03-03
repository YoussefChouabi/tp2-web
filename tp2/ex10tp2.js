const readline = require('readline-sync');
let chaine = readline.question("entre un mot: ");
console.log("le mot inverse: "+ chaine.split('').reverse().join(''));