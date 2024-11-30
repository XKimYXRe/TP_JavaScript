def analyser_phrase(phrase):
    longueur = 0
    nombre_mots = 0
    nombre_voyelles = 0
    voyelles = "aeiouAEIOU"
    
    
    dans_mot = False
    
    for char in phrase:
        longueur += 1
        
        if char in voyelles:
            nombre_voyelles += 1
        
        if char == ' ':
            if dans_mot:
                nombre_mots += 1
                dans_mot = False
        else:
            dans_mot = True
        
        if char == '.':
            if dans_mot:
                nombre_mots += 1
            break
    
    return longueur, nombre_mots, nombre_voyelles

# Exemple d'utilisation
phrase =("Saisir une phrase.....")
longueur, nombre_mots, nombre_voyelles = analyser_phrase(phrase)
print(f"Longueur de la phrase: {longueur}")
print(f"Nombre de mots: {nombre_mots}")
print(f"Nombre de voyelles: {nombre_voyelles}")
