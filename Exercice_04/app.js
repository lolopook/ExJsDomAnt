// 1. Faire en sorte qu'à la soumission d'un pays ne faisant 
// pas partie de la liste, il s'ajoute

const btn = document.getElementsByTagName("button")[0];
// console.log(btn);

const input = document.getElementsByTagName("input")[0];
// console.log(input

 const country = document.getElementsByTagName("li");
console.log(country);

const ul = document.getElementsByTagName("ul")[0];

let arrayCountries = [];

for (country of countries) {
    arrayCountries.push(country.innertHTML);
}

btn.addEventListener('click', function(){
    // console.log(pays);
    ul.innertHTML += "<li> '+ country +' </li>"
})


// 2. Si un pays est déjà existant dans la liste, 
// il faut alors l'afficher en bas de liste sans le recréer


