let userString = prompt("Inserisci una stringa: ").toLowerCase();

while (!isNaN(userString)) {
  alert("La stringa inserita non è corretta. Riprova");
  userString = prompt("Inserisci una stringa: ");
}

const userStringRev = reverseString(userString);
if (userString == userStringRev) {
  alert("La stringa è palindroma");
} else {
  alert("La stringa non è palindroma");
}
