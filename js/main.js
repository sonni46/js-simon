// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

let numeriPc = [];
let numUtente = [];
let volte = 5;


numGen();
attenzione();
timer();
console.log(numeriPc)
console.log(numUtente)
giuso = 0;
sbagliato = 0;
for (let i = 0 ; i < numUtente.length; i++){
    for(let j = 0; j < numeriPc.length; j++){
        if(numUtente[i] == numeriPc[j]){
            giuso += i;
        }
        else
        {
            sbagliato += j;
        }
    }
}

console.log("presi " + giuso + " sbagliati " + sbagliato);


// function// function// function// function// function// function



function attenzione () {
    alert(numeriPc);
}

function inserisci() {
    for (let i = 0; i < volte;i++){
        utente = 0;
        do {
            utente += parseInt(prompt("inserisci numeri"));
        }while(numUtente.includes(utente))
        numUtente.push(utente);
    } 
}

function timer () {
    setTimeout(inserisci,2000);
}

function numGen() {
    for (let i = 0; i < volte;i++){
        let numRand;
        do {
            numRand = randomico(50);
        }while(numeriPc.includes(numRand))
        numeriPc.push(numRand)
    } 
}

function randomico (max){
    return Math.floor(Math.random() * max);
};