/*  
SNACK 3: Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

//Creo una lista di nomi
var list1 = ["Elisabeth", "Mary", "Zelda", "Daisy", "Emily"];

//Creo una lista di cognomi
var list2 = ["White", "Green", "Brown", "Smith", "Black"];

//Creo lista Gatsby vuota
var gatsbyList = []; 

//Generare falsi nomi
while (gatsbyList.length < 3 ) {
    var random1 = Math.floor(Math.random() * list1.length);
    var random2 = Math.floor(Math.random() * list2.length);
    var guest = list1[random1] + " " + list2[random2];
    console.log(guest);
    if (!gatsbyList.includes(guest)) {
        gatsbyList.push(guest);
    }
}
console.table(gatsbyList);