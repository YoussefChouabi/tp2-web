const readline =require('readline-sync');
let anneedenaissance= readline.questionInt("entre votre annee de naissance: ");
let nom = readline.question("entre votre nom: ");
let special=['/','$','#','!','?','&','^'] ;
let Random =special[Math.floor(Math.random() * special.length)];
console.log("your new name is : "+ nom + anneedenaissance + Random);