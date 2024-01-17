# HUMAN CODE

### Traccia

Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

### Svolgimento

- Chiedo all'utente una parola userString in input
- Creo un ciclo while per il controllo del dato inserito
- Passo la stringa alla funzione reverseString in cui:
  - Prendo la stringa in input e la scompongo in un array
  - Rovescio l'array cambiando le posizioni delle lettere
  - Ricompongo l'array in una stringa e la restituisco in output
- Eseguo un controllo sulla stringa
  - Se userString == userStringReversed
    - allora la parola è palindroma
  - Altrimenti
    - la parola non è palindroma
