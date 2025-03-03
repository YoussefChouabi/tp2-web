const readline = require('readline-sync');
let prix =readline.questionFloat("enre le prix: ");
let TVA =readline.questionFloat("enre le TVA en pourcontage: ");
TVA =TVA/100;
let total_TTC=(prix * TVA)+prix;
console.log("le prix total TTC est: "+total_TTC);

