const userString = prompt("Inserisci una stringa: ").toLowerCase();

// while (typeof userString != "string") {
//   alert("La stringa inserita non è corretta. Riprova");
//   const userString = prompt("Inserisci una stringa: ");
// }

const userStringRev = reverseString(userString);
if (userString == userStringRev) {
  alert("La stringa è palindroma");
} else {
  alert("La stringa non è palindroma");
}
