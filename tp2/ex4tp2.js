const readline = require('readline-sync');
let age =readline.question("entre your age : ");
let estadult = age>=18 ?true:false;
console.log("estadult= "+estadult);