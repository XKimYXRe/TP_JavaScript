const readlineSync = require('readline-sync');

const n = readlineSync.question("Veuillez entrer le nombre de ligne: ")
for (let i = 1; i <= n; i++) {
    let stars = '';
    for (let j = 0; j < i; j++) {
        stars += '*';
    }
    console.log(stars);
}