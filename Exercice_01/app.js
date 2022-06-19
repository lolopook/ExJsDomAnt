
// get elementS by Tags name - on récupère un tableau
const btns = document.getElementsByTagName("button");
// Donc nous allons selectionner le seul boutton.
const btn = btns[0];

//
const fete = document.getElementById("feteDuJour");


btn.addEventListener('click', function() {
  // on peut essayer le clic.
    // alert("btn cliquez");
    fete.innerHTML = "Le 15 juin, c'est la Saint-Augustin";
  });