const readlineSync = require('readline-sync');
const n = prompt("Veuillez entrer le nombre de ligne: ")

for (i=1; i <= n; i++){
    let etoile = ""
    for (j=0; j < i; j++){
        etoile += "*"
    }
    console.log(etoile)
}