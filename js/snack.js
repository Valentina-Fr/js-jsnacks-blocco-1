/*  
SNACK 1 : Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

//Dichiarazione e assegnazion variabile sum 
var sum = 0;

//Versione con for
for (var i = 0; i < 5; i++) {
    var userNumber = parseInt(prompt("SNACK 1 - Inserisci un numero " + (i + 1).toString(), "1"));
    if (!isNaN(userNumber)) {
        sum += userNumber;
    } else {
        i--;
    }
}

//Versione con while
/* var i = 0;
while (i < 5) {
    var userNumber = parseInt(prompt("Inserisci un numero " + (i + 1).toString(), "1"));
    if (!isNaN(userNumber)) {
        sum += userNumber;
        i++;
    }
} */
document.getElementById("snack-1").innerText = "La somma dei numeri inseriti nel primo snack è: " + sum;

/*  
SNACK 2: Chiedi un numero all'utente, se è pari stampa il numero,
se è dispari stampa il numero successivo.
*/

//Dichiarazioni variabili
var choosenNumber;
var result 

//Chiedere numero all'utente
do { 
choosenNumber = parseInt(prompt("SNACK 2 - Inserisci un numero"));
} while (isNaN(choosenNumber) || choosenNumber <= 0);

//Stabilire se è pari o dispari e stampare
if (choosenNumber % 2 === 0) {
    result = choosenNumber;
} else {
    result = choosenNumber + 1;
}

document.getElementById("snack-2").innerText = "Risultato secondo snack: " + result;

/*  
SNACK 3: Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

//Creo una lista di nomi
var listNames = ["Elisabeth", "Mary", "Zelda", "Daisy", "Emily"];

//Creo una lista di cognomi
var listSurnames = ["White", "Green", "Brown", "Smith", "Black"];

//Creo lista Gatsby vuota
var gatsbyList = []; 

//Variabile lista
var listItem = "";

//Generare falsi nomi
while (gatsbyList.length < 3 ) {
    var random1 = Math.floor(Math.random() * listNames.length);
    var random2 = Math.floor(Math.random() * listSurnames.length);
    var guest = listNames[random1] + " " + listSurnames[random2];
    console.log(guest);
    if (!gatsbyList.includes(guest)) {
        gatsbyList.push(guest);
    }
}

for (var i = 0; i < gatsbyList.length; i++) {
    listItem += "<li>" + gatsbyList[i] + "</li>";
}

document.getElementById("gatsby-list").innerHTML = listItem;

/*  
SNACK 4: Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
*/

//Creare primo array
var list1 = [15, 25, 36, 44, 50];

//Creare secondo array
var list2 = [5, 10, 18, 22, 27, 29, 33, 41, 56, 60, 71, 88];

//Aggiungere elementi casuali all'array con meno elementi
while (list1.length !== list2.length) {
    var random = Math.floor(Math.random() * 100);
    if (list1.length < list2.length) {
        list1.push(random);
    } else {
        list2.push(random);
    }
}

//Variabili lista
var firstListNumbers = "";
var secondListNumbers = "";

for (var i = 0; i < list1.length; i++) {
    firstListNumbers += "<li>" + list1[i] + "</li>";
}
document.getElementById("list-1").innerHTML = firstListNumbers;

for (var i = 0; i < list1.length; i++) {
    secondListNumbers += "<li>" + list2[i] + "</li>";
}
document.getElementById("list-2").innerHTML = secondListNumbers;

