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

console.table(list1);
console.table(list2);