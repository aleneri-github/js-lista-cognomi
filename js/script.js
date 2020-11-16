// Lista Cognomi
// Chiedere all’utente il cognome,
// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
// Stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.
// Consigli del giorno:
// Consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.

var listaCognomi = ["Neri", "Calvieri", "Romiti", "Bervicato", "Busellato", "Ghilardi"];
console.log(listaCognomi);

var nuovoCognome = prompt('Inserisci il tuo cognome');
listaCognomi.push(nuovoCognome);

console.log(listaCognomi.sort());
