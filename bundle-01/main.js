/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// è un esercizio che serve per incrementare l'indice di un contatore, non ha erorri ne di sintassi ne logici

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}
// errore nella condizione del if non puo andare solo un uguola perchè fa asseggnare, ne vanno 3
// se il numero è dispari aggiungere 5, altro erroe è che la funzione veniva creata ma mai dichiarata


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
// ERRORI
// sbagliata la sintassi per il ciclo for, vanno messi i ;
// è un esercizio che serve per incrementare l'indice di un contatore,altro erroe è che la funzione veniva creata ma mai dichiarata


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length ; i++) {
        if ((numbers[i] % 2 === 0)) {
            evenNumbers.push((numbers[i]));
        }
    }
    return evenNumbers;
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// esercizio 4

// riga 45 bisogna togliere il ; dopo i++, a riga 46 sempre === e non =
// L'esercizio ha il compito di pisciare i numeri pari all'interno dell'array vuoto