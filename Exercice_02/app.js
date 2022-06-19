

let textResult = document.getElementById("result");
const btns = document.getElementsByTagName("button");
const btn = btns[0];

// le clic du button      Avec le event on a toute les infos de l'évènement. cette foncitonne appelle les evenements que le clic à appelé.
btn.addEventListener ('click', function(event){
    // Petite alert pour vérifié si le clic foncitonne. 
    // alert("j'ai bien cliqué");
    // preventDefault empeche le comportement par default d'un element. Ici le submit.
    event.preventDefault();

    // on récupère les entré des inputs .  avec bytag name byname retourne tout les by name.
    const inputA = document.getElementsByTagName("input")[0];
    const inputB = document.getElementsByTagName("input")[1];

    //on affiche les valeurs des inputs. 
    // console.log(inputA.value);
    // console.log(inputB.value);

    //on calcule le resultat. On addition 2 chiffre mais le + concataine. 
    const total = inputA.value*1 + inputB.value*1;
    //méthode classique. consite a écrire parseInt(input.val)+ parseInt(input.val2);
    // la deuxième la multiplication par 1. qui indique un resultat Int.
    
    // on verifie le resultat. 
    // console.log(total);

    // affiche dans l'endroit prévu a cette effet. innert text car pas de HTML. 
    textResult.innerText = total;
})


