/*  
SNACK 1 : Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

//Versione con for

//Dichiarazione e assegnazion variabile sum 
var sum = 0;

//Ciclo for
for (var i = 0; i < 5; i++) {
    var userNumber = parseInt(prompt("Inserisci un numero", "1"));
    sum += userNumber;
}

console.log(sum);

//Versione con while