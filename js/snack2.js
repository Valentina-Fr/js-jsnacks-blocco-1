/*  
SNACK 2: Chiedi un numero all'utente, se è pari stampa il numero,
se è dispari stampa il numero successivo.
*/

//Dichiarazione variabile
var userNumber

//Chiedere numero all'utente
do { 
userNumber = parseInt(prompt("Inserisci un numero"));
} while (isNaN(userNumber) || userNumber <= 0);

//Stabilire se è pari o dispari e stampare
if (userNumber % 2 === 0) {
    console.log(userNumber);
} else {
    console.log(userNumber + 1);
}