const readlineSync = require('readline-sync');

function pairOuImpair(nombre) {
    if (!Number.isInteger(nombre)) {
        console.log(`L'entrée saisie n'est pas un nombre entier`);
    } 
    else if (nombre % 2 !== 0) {
        console.log(`Le nombre saisi ${nombre} est impair`);
    } 
    else {
        console.log(`Le nombre saisi ${nombre} est pair`);
    }
}

const nombre = parseInt(prompt("Saisir un nombre entier: "));
pairOuImpair(nombre);
