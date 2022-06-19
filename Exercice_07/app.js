// function rand() {
//     (Math.random() + 1).toString(36).substring(4);
// } 

let r = (Math.random() + 1).toString(36).substring(4);
// var pour créer un random avec toString
// (26 chaine A-Z et + 10 pour chiffre 0-9)
//subString pas trop compris mais plus
const input = document.getElementsByTagName("input")[0];
//selection de l'input. 
const btn = document.getElementsByTagName("button")[0];
// création d'un var btn;

input.value = r;
//la valeur de l'input est r au chargement de la page.

btn.addEventListener('click', function(){
    //création de la fonction, on reprends l'algo math.rand.. 
    //car il faut refaire a chaque fois.
    input.value = (Math.random() + 1).toString(36).substring(4);
})
