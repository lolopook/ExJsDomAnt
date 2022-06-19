

const btn = document.getElementsByTagName("button")[0];
console.log(btn);


const inputUrl = document.getElementsByTagName("input")[0];
// console.log(inputUrl);

const img = document.getElementById("image"); 
// Selection de la Div avec Id image.


// console.log(img);


//fonction anonyme qui prend l'event 
btn.addEventListener('click', function(event){
    //preventDefault empeche l'envoie du form dans l'url.
    event.preventDefault();
    //prendre la valeur de l'input
    // alert("ça click");
    img.innerHTML = '<img src='+ inputUrl.value +' alt="">';
    // copier l'url dans le src de l'image.
})