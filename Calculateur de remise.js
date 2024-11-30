const readlineSync = require('readline-sync');


function calculerRemiseSurAchat(montant) {
    const achat = {
        montant,
        remise: {
            pourcentage: 0,
            montant: 0,
        },
        facture: 0,
    }

    if (achat.montant > 100000) {
        achat.remise.pourcentage = 15
        achat.remise.montant = (montant * achat.remise.pourcentage)/100
        achat.facture = achat.montant - achat.remise.montant
        return achat
    }

    if (achat.montant > 50000 && achat.montant <= 100000){
        achat.remise.pourcentage = 10
        achat.remise.montant = (montant * achat.remise.pourcentage)/100
        achat.facture = achat.montant - achat.remise.montant
        return achat
    }

    if (achat.montant > 25000 && achat.montant <= 50000) {
        achat.remise.pourcentage = 5
        achat.remise.montant = (montant * achat.remise.pourcentage)/100
        achat.facture = achat.montant - achat.remise.montant
        return achat
    }

        achat.remise.pourcentage = 0
        achat.remise.montant = 0
        achat.facture = montant
        return achat
}

function afficher(setFacture){
    const  {montant, remise, facture} = setFacture
        console.log(`Montant initial: ${montant}`);
        console.log(`Remise: ${remise.pourcentage}%`)
        console.log(`Montant finale: ${facture}`);
}

function espacer() {
    console.log("")
}



function instruction(){
    espacer()
    console.log("Pour faire une nouvelle facturation tapez: 'f'.")
    console.log("Pour sortir de l'application tapez: 's'.")
}

function obtenirInstructionChoisie() {
    const choix = readlineSync.question("Choisissez une option: ")
    return choix
}

function traitementFacturation() {
    while (true) {
     instruction()
    const  response = obtenirInstructionChoisie()
    

    if(response.toLowerCase() === "f"){
        nouvelleFacturation()
        continue
    }

    if(response.toLowerCase() === "s"){
        messageDeSortiApplication()
        break
    }
   }
}

function nouvelleFacturation(){
    espacer()
        const montant = parseInt(readlineSync.question("Veuillez saisie un montant:"))
        espacer()
        console.log("Facture en cours de traitement...")
        espacer()
        const facture = calculerRemiseSurAchat(montant)
        console.log("Traitement terminée:")
        afficher(facture)
}

function messageDeSortiApplication(){
    espacer()
        console.log("************** Vous êtes sortie de l'application **************")
}

function main(){
    espacer()
    console.log("************** Bienvenue sur l'application de facturation **************")
    espacer()
   traitementFacturation()
}

main()