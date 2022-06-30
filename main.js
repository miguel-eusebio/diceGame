'use strict'

/* AMBAS OPCIONES FUNCIONAN CORRECTAMENTE */

/* MI OPCIÓN */
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩 Jugador 1 ganó!";
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Jugador 2 ganó! 🚩";
}else{
    document.querySelector("h1").textContent = "🚩 Empate! 🚩";
}

document.querySelectorAll("div img")[0].setAttribute("src" ,`images/dice${randomNumber1}.png`);
document.querySelectorAll("div img")[1].setAttribute("src" ,`images/dice${randomNumber2}.png`);

console.log(randomNumber1);
console.log(randomNumber2);