const readlineSync = require('readline-sync');

function trancheAge(age) {

    
    if(age >= 0 && age < 12 ) {
    console.log(`Vous avez ${age} ans, Et vous êtes un Enfant !!!`)
}

    else if (age >= 12 && age <= 17) {
        console.log(`Vous avez ${age} ans, Et vous êtes un Adolescent !!!`)
}

    else if (age >= 18 && age <= 64) {
        console.log(`Vous avez ${age} ans, Et vous êtes un Adulte !!!`)
}

    else if (age >= 65) {
        console.log(`Vous avez ${age} ans, Et vous êtes un Senior !!!`)
}

    else {
        console.log(`Âge non valide !!!`)
    }
        

}

const age = prompt("Veuillez saisie votre age: ")
trancheAge(age)
