//Inserimento del testo da parte dell'utente
var testoutente=prompt("Inserisci un testo");

//Inserimento delle parole che devono essere censurate
var elencoparole=prompt("Inserisci un elenco di parole");

//Funzione che mi permette di dividere il testo in un array
function divideInArray(elenco){
  return parola=elenco.split(" ");
}

//Richiamo la funzione per dividere i due input in degli array
var testodiviso=divideInArray(testoutente);
console.log(testodiviso);
var wordcensured=divideInArray(elencoparole);
console.log(wordcensured);


//Funzione per confrontare le parole censurate con le parole del testo
function confrontoArray(array1,array2){
  for (var i = 0; i < array1.length; i++) {
    if (array1[i]===array2[i]) {
      alert("no");
    }
  }
}
confrontoArray(testodiviso,wordcensured);
