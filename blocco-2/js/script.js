/*  SNACK 1:
1. Creare un oggetto palla che abbia le seguenti proprietà.
  Nome = palla
  Peso = 10
2. stampare la palla in pagina*
3. Attraverso un prompt dare la possibilità all’utente di modificare il peso
della palla., poi stampare la palla con il peso modificato
BONUS: stampare la palla tramite una funzione
*/

//Creo oggetto palla
const palla = {
    nome: "palla",
    peso: 10, 
}

//Stampo in pagina
var display = document.getElementById("object");
printObject (palla, display);

//Modificare il peso della palla
var button = document.getElementById("submit");
var inputWeight = document.getElementById("input-weight");
var displayNew = document.getElementById("new-weight");
var title = document.getElementById("result-title");
var alert = document.getElementById("alert");

button.addEventListener("click", function() {
    var inputValue = inputWeight.value;

    if (!inputValue || isNaN(inputValue) || inputValue.trim() === "" || inputValue < 0){
        alert.classList.remove("hidden");
    } else { 
        alert.classList.add("hidden");
        title.classList.remove("hidden");
        palla["peso"] = parseInt(inputValue);
        printObject(palla, displayNew);
    }
});



//Funzione che stampa in pagina
function printObject (object, print){
    let result = "";
    for (let key in object) {
    result += "<strong>" + key + "</strong>: " + palla[key] + "<br>";
    }
    print.innerHTML = result;
}

/* 
SNACK 2: Creiamo un array di oggetti 
contenente 3 squadre di calcio 
con proprietà "name", "city" "points";
Stampiamo le squadre in pagina, 
all'interno di una tabella HTML
*/

//Array squadre di calcio
const teams = [
    {name: "Inter",
    city: "Milano",
    points: 10}, 
    {name: "Roma",
    city: "Roma",
    points: 5},
    {name: "Napoli",
    city: "Napoli",
    points: 15}
]
    
//Stampo in una tabella
var table = document.getElementById("table-body");
let print = "";
    
for (let i = 0; i < teams.length; i++){
    let currentTeam = teams[i];
    print += "<tr>";
    for (let key in currentTeam) {
        print += "<td>" + currentTeam[key] + "</td>";
    }
    print += "</tr>";
}


table.innerHTML = print;