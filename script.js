//Inserimento del testo da parte dell'utente
var testoutente=prompt("Inserisci un testo");
console.log("TESTO ORIGINALE INSERITO DALL'UTENTE: " + testoutente);

//Inserimento delle parole che devono essere censurate
var elencoparole=prompt("Inserisci un elenco di parole");
console.log("ELENCO PAROLE CENSURATE: " + elencoparole);

//Funzione che mi permette di dividere il testo in un array
function divideInArray(elenco){
  return parola=elenco.split(" ");
}

//Richiamo la funzione per dividere i due input in degli array
var testodiviso=divideInArray(testoutente);
console.log(testodiviso);
var wordcensured=divideInArray(elencoparole);
console.log(wordcensured);


//Funzione per confrontare le parole censurate con le parole del testo, e nel caso aumenta una variabile punteggio
function confrontoArray(array1,array2){

  var i, j, x, censura, punteggio;
  punteggio=0;

  // Ciclo che mi serve per scorrere tutti i valori del primo array
  for (var i = 0; i < array1.length; i++) {

    // Ciclo che mi serve per scorrere tutti i valori del secondo array
    for (var j = 0; j < array2.length; j++) {
      if (array1[i]===array2[j]) {
        punteggio++;

        // Copio l'array su cui poi sostituire le parole censurate con le x
        censura=array1[i].length;
        array1[i]="";

        // Condizione con cui vado a rimpiazzare le stringhe da censurare con le x
        x=0;
        while(x<censura){
          array1[i] = 'x';
          x++;
        }
      }
    }
  }
  return punteggio;
}

// Richiamo la funzione confronto inserendo i due array
var result=confrontoArray(testodiviso,wordcensured);
var bwordindex=0;
if (testodiviso.length!=0) {
  var bwordindex=result/testodiviso.length;
}
else {
  bwordindex=0;
}

console.log("IL TESTO CENSURATO: " + testodiviso.join(' '))
console.log("BADWORD INDEX: " + bwordindex)
document.getElementById('testocensurato').innerHTML=testodiviso.join(' ');
document.getElementById('punteggio').innerHTML="BADWORD INDEX: " + bwordindex;
