/*  
SNACK 1 : Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

//Dichiarazione e assegnazion variabile sum 
var sum = 0;

//Versione con for
/* for (var i = 0; i < 5; i++) {
    var userNumber = parseInt(prompt("Inserisci un numero", "1"));
    sum += userNumber;
} */

//Versione con while
var i = 0;
while (i < 5) {
    var userNumber = parseInt(prompt("Inserisci un numero", "1"));
    sum += userNumber;
    i++;
}
console.log(sum);