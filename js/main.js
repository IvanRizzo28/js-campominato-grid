/*
Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/
'use strict';

/*
funzioni
*/
function setDifficolta(difficolta){
    const diff = document.querySelector(':root');
    diff.style.setProperty('--difficolta', difficolta);
}

function creaCelle(elemento,classe,contenuto){
    let element=document.createElement(elemento);
    element.classList.add(classe);
    element.innerText=contenuto;
    element.addEventListener("click", function(){
        element.classList.add("blu");
        console.log(contenuto);
    });
    return element;
}

/*
main
*/
const start=document.getElementById("start");
const select=document.getElementById("select");
const container=document.querySelector(".container");

start.addEventListener("click", function(){
    container.innerHTML="";
    setDifficolta(select.value);
    for(let i=0;i<Math.pow(select.value,2);i++) container.append(creaCelle("div","cell",i+1));
});