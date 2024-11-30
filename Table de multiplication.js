const readlineSync = require('readline-sync');

function multiplication(){
    if (Number.isInteger(nombre)) {
    console.log(`Multiplication du nombre ${nombre}`)

    for (let i = 1; i <= 10; i++) {
        console.log(`${nombre} x ${i} = ${nombre * i}`)
    }
}

    else {
        console.log("Veuillez entré un nombre valide!!!")
    }
}

const nombre = parseInt(prompt("Veuillez entrer un nombre entier:"))
multiplication()


