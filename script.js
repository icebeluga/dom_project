// Add your code to this file
let back_color= document.querySelector("body"); 

back_color.style.backgroundColor = "#00008b";

let burder= document.querySelectorAll("img");
for(let i =0; i<burder.length; i++){
    burder[i].style.border = "4px dotted #a6854c";
}

let names= document.getElementsByClassName("pokemon_names");
for(let i =0; i<names.length; i++){
    names[i].style.color = "#e0dea1";
    names[i].innerHTML += "!";
}
let position= document.querySelector("h2"); 

position.style.textAlign = "center";

let Bulbasaur= document.getElementById("bulbasaur_container"); 

Bulbasaur.style.backgroundColor = "#388e8e";

let rewording= document.querySelector("footer"); 

rewording.style.borderBottom= "2px solid white";
rewording.innerHTML = "All Star Code | DOM Project";


document.querySelector()
document.getElementById()
document.querySelectorAll()
document.getElementsByClassName()

