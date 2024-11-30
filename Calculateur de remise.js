const readlineSync = require('readline-sync');


function calculerRemiseSurAchat(montant) {
    const achat = {
        montant,
        remise: {
            pourcentage:0,
            valeur: 0,
        },
        facture: 0,
    }

    if (achat.montant > 100000) {
        achat.remise.pourcentage = 15
        achat.remise.valeur = (montant * achat.remise)/100
        achat.facture = achat.montant - achat.remise.valeur
        return achat
    }

    if (achat.montant > 500000 && achat.montant <= 100000){
        achat.remise.pourcentage = 10
        achat.remise.valeur = (montant * achat.remise)/100
        achat.facture = achat.montant - achat.remise.valeur
        return achat
    }

    if (achat.montant > 250000 && achat.montant <= 500000) {
        achat.remise.pourcentage = 5
        achat.remise.valeur = (montant * achat.remise)/100
        achat.facture = achat.montant - achat.remise.valeur
        return achat
    }

        achat.remise.pourcentage = 0
        achat.remise.valeur = 0
        achat.facture = montant
        return achat
}

function afficher(facture){
        console.log(`Montant initial: ${facture.montant}`);
        console.log(`Remise: ${facture.remise}%`)
        console.log(`Montant finale: ${facture.montant - facture.remise}`);
}

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
        let montant = parseInt(prompt("Veuillez saisie un montant:"))
        console.log("")
    //    remiseAchat();
        const facture = calculerRemiseSurAchat(montant)
        afficher(facture)
        askUser(); 
    }
    else {
        console.log("")
        console.log("************** Le programme est terminé!!! **************")
        console.log("*********************** Merci!!! ************************")
    }

    
}

// askUser()

function main(){
    
    askUser()
}

main()