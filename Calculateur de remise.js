const readlineSync = require('readline-sync');

function remiseAchat() {
    console.log("")
    console.log("Le programme s’exécute....")
    console.log("")
    let montant = parseInt(prompt("Veuillez saisie un montant:"))
    console.log("")
    if (montant >= 25000 && montant <= 50000) {
        remise = ((montant * 5)/100);
        console.log(`Montant initial: ${montant}`);
        console.log("Remise: 5%")
        console.log(`Montant finale: ${montant - remise}`);
    }

    else if (montant >= 50000 && montant <= 100000){
        remise = (montant * (10/100));
        console.log(`Montant initial: ${montant}`)
        console.log("Remise: 10%")
        console.log(`Montant finale: ${montant - remise}`)
    }

    else if (montant > 100000) {
        remise = (montant * (15/100));
        console.log(`Montant initial: ${montant}`)
        console.log("Remise: 15%")
        console.log(`Montant finale: ${montant - remise}`)
    }

    else  {
        console.log(`Montant initial: ${montant}`)
        console.log("Remise: Aucune remise")
        console.log(`Montant finale: ${montant}`)
    }

}


function askUser(){
    console.log("")
    let userResponse = prompt("Voulez vous executer le programme? (Oui(o)/non(n)): ")
    console.log("")
    if(userResponse.toLowerCase() === "oui" || userResponse.toLowerCase() === "o"){
        console.log("")
        console.log("Le programme s’exécute....")
        console.log("")
        console.log("")
       remiseAchat();
        askUser(); 
    }
    else {
        console.log("")
        console.log("************** Le programme est terminé!!! **************")
        console.log("*********************** Merci!!! ************************")
    }

    
}

askUser()
