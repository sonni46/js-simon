// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

let numeri = [];
let volte = 5;

numGen();
console.log(numeri)

// function// function// function// function// function// function

function numGen() {
    for (let i = 0; i < volte;i++){
        let numRand;
        do {
            numRand = randomico(50);
        }while(numeri.includes(numRand))
        numeri.push(numRand)
    } 
}

function randomico (max){
    return Math.floor(Math.random() * max);
};