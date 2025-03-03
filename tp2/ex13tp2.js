const readline =require('readline-sync');
let heures = readline.question("entre le heure: ");
let minutes = readline.question("entre le minutes: ");
let secondes = readline.question("entre le secondes: ");

let total = secondes+(minutes*60)+(heures*3600);
console.log("la total de secondes est: "+ total);