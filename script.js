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

// 1-chiediamo all utente di inserire le due variabili (età, numero di kilometri).
let eta = prompt("inserisci la tua età")
let lenght = prompt("inserisci il numero di chilometri")


// 2-ora stabiliamo il prezzo del prezzo in base alla lunghezza della tratta.
let price = lenght * 0.21;

// 3-iseriamo le variabili del prezzo in base all'età:

//-se l'età è compresa tra i 18 e i 64 anni il prezzo è invariato:
let discountPrice = price;

//-se l'età é minore di 18 anni si attua uno sconto del 20%:
if (age < 18) {
    discountPrice = price - (price * 20 / 100);

//-se invece l'età é maggiore di 65 anni si attua uno sconto del 40%:
} else if (age>65) {
    discountPrice = price - (price * 40 / 100);
}

// 4-convertiamo il prezzo ad un valore avente due decimali:
let finalPrice = discountPrice.toFixed(2);

// 5-stampiamo al cliente il valore in euro del csto delò biglietto:
console.log(`Il prezzo del tuo biglietto è di: ${finalPrice} €.`);
