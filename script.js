//Inserimento del testo da parte dell'utente
var testoutente=prompt("Inserisci un testo");

//Inserimento delle parole che devono essere censurate
var elencoparole=prompt("Inserisci un elenco di parole");

//Funzione che mi permette di dividere il testo in un array
function divideInArray(elenco){
  return parola=elenco.split(" ");
}

//Richiamo la funzione per dividere i due input in degli array
divideInArray(testoutente);
divideInArray(elencoparole);

var testodiviso=(divideInArray(testoutente));
console.log(testodiviso);
var wordcensured=(divideInArray(elencoparole));
console.log(wordcensured);

// Creazione array parole censurate
var lista_censure=[];
var parole_testo=[];

//Funzione per confrontare le parole dell'array
function confrontoArray(array1,array2){
  for (var i = 0; i < array1.length; i++) {
    if (array1[i]==array2[i]) {
      alert("ciao");
    }
  }
}
confrontoArray(parole_testo,lista_censure);
console.log(parole_testo);
