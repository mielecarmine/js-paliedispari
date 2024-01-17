// - Chiedo all'utente di scegliere fra pari e dispari
// - Chiedo all'utente di inserire un numero da 1 a 5
// - Controllo con un ciclo while che l'utente abbia inserito correttamente il numero
// - Genero un numero random da 1 a 5 per il computer attraverso una funzione randomNumber
// - Sommo i due numeri
// - Controllo se la somma e pari o dispari attraverso una funzione, che ritorna una stringa "pari" o "dispari"
// - Confronto la scelta dell'utente con il valore di ritorno della funzione
//   - Se sono uguali
//     - L'utente ha vinto
//   - Altrimenti
//     - L'utente ha perso

let userChoice = prompt("Pari o dispari?").toLowerCase();
while (userChoice != "pari" && userChoice != "dispari") {
  alert("Dato non valido. Si prega di inserire di nuovo.");
  userChoice = prompt("Pari o dispari?").toLowerCase();
}

let userNumber = prompt("Inserisci un numero da 1 a 5");
while (userNumber < 1 || userNumber > 5) {
  alert("Numero non valido");
  userNumber = prompt("Inserisci un numero da 1 a 5");
}

const computerNumber = randomNumber();
console.log(computerNumber);
const sum = parseInt(userNumber) + parseInt(computerNumber);
console.log(sum);

if (userChoice == isEven(sum)) {
  alert("L'utente vince");
} else {
  alert("L'utente ha perso");
}
