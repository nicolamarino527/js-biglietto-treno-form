// Descrizione:
// Scrivere un programma che chieda all’utente: - Il numero di chilometri 
// da percorrere - Età del passeggero Sulla base di queste informazioni dovrà
//  calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente
//  due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. 
// La risposta finale (o output) sarà anch’essa da scrivere in console.

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo 
// un form completo in pagina in cui l’utente potrà inserire i dati e visualizzare il 
// calcolo finale con il prezzo. Il recap dei dati e l’output del prezzo 
// finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato 
// con massimo due decimali, per indicare i centesimi sul prezzo).

// MILESTONE 3:
// Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile,
//  raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.
// Nota: Se non vi sentite particolarmente creativi, quella allegata potrebbe essere 
// un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare 
// una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.


// ---------------------------- MILESTONE 1:

// costanti di input
const nameField = document.getElementById('name-field');
const lengthField = document.getElementById('length-field');
const ageField = document.getElementById('age-field');
const form = document.getElementById('form');

// costanti di output
const nameOutput = document.getElementById('name-output');
const lengthOutput = document.getElementById('length-output');
const ageOutput = document.getElementById('age-output');
const priceOutput = document.getElementById('price-output');
const offerOutput = document.getElementById('offer-output');
const carriageOutput = document.getElementById('carriage-output');
const cpOutput = document.getElementById('cp-output');

// funzione per generare un numero casuale da 1 a 9
function generateRandomCarriage() {
    return Math.floor(Math.random() * 9) + 1;
}

// funzione per generare un codice CP casuale (5 cifre)
function generateRandomCP() {
    let cp = '';
    for (let i = 0; i < 5; i++) {
        cp += Math.floor(Math.random() * 10); // aggiunge una cifra casuale tra 0 e 9
    }
    return cp;
}

// gestione dati
form.addEventListener('submit', (event) => {
    // blocco invio form
    event.preventDefault();
    
    // ottieni i valori dai campi
    const name = nameField.value;
    const length = parseFloat(lengthField.value);
    const ageGroup = ageField.value;

    // calcola il prezzo base
    let price = length * 0.21;

    // applica sconti in base all'età
    if (ageGroup === 'under18') {
        price *= 0.8; // sconto 20%
    } else if (ageGroup === 'over65') {
        price *= 0.6; // sconto 40%
    }

    // determina l'offerta in base all'età
    let offer = '';
    if (ageGroup === 'adult') {
        offer = 'Offerta Standard';
    } else {
        offer = 'Offerta Sconto';
    }

    // genera il numero della carrozza
    const carriage = generateRandomCarriage();

    // genera il codice CP
    const cp = generateRandomCP();

    // mostra i dati nelle rispettive aree di output
    nameOutput.textContent = name;
    lengthOutput.textContent = length;
    ageOutput.textContent = ageField.options[ageField.selectedIndex].text;
    priceOutput.textContent = price.toFixed(2);
    offerOutput.textContent = offer;
    carriageOutput.textContent = carriage;
    cpOutput.textContent = cp;

    // log
    console.log("Dati mostrati sulla pagina");
});
