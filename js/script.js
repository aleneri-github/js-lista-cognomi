// Lista Cognomi
// Chiedere all’utente il cognome,
// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
// Stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.
// Consigli del giorno:
// Consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.

// NOTE: Lista cognomi
var listaCognomi = ["Neri", "Calvieri", "Romiti", "Bervicato", "Busellato", "Ghilardi"];
console.log(listaCognomi);

// NOTE: Iinserimento nuovo cognome
var nuovoCognome = prompt('Inserisci il tuo cognome');
listaCognomi.push(nuovoCognome);

// NOTE: Elencare in ordine alfabetico
console.log(listaCognomi.sort());

for (var i = 0; i < listaCognomi.length; i++) {
  listaCognomi[i]

var contenutoPrecedente = document.getElementById('lista_cognomi').innerHTML;
document.getElementById('lista_cognomi').innerHTML = contenutoPrecedente + "<li>" + listaCognomi[i] + "</li>";
console.log(i + listaCognomi [i]);
};

var i = 0;

while (listaCognomi[i] != nuovoCognome) {
  i++;
}

 document.getElementById('ultimo').innerHTML =
 nuovoCognome + " e si trova al numero " + (i + 1);
