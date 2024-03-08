/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();

// ERRORE : MESSAGE NON è UNA CONST MA UNA LET
// ha il compito di stampare un messaggio, se hai meno di 18 sei troppo giovane, se ne hai piu di 18 hai piu di 18 anni

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();
// Serve a vedere quanti colori ho nella paletta perché conta la lunghezza della Array, l'erorore era di sintassi, nella parola length


// ESERCIZIO 3
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();
// ha il compito di sommare un numero dato dall'utente +12, l'errore era che sommava un numero ad una stringa, quindi concatenava, con il parsint si rioslve il problema

// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

// errore true e false non vanno dichiarate come stringa ma come valore booleano
// La funzione serve a verificare se la mail inserita è presente nell'array, Se presente fa fare l'accesso altrimenti nega l'accesso

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        

            if (email === userEmail) {
                grantAccess = 'true';

            }

        

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
}
    checkAccessImproved();

    // NON ERA STATA CHIUSA LA PARENTESI GRAFFA DELLA FUNZIONE, il primo if era inutile
    // La funzione serve a verificare se la mail è presente all'interno del array Per farti accedere, se presente ti stampa accesso consentito, se non è presente ti stampa accesso negato





























