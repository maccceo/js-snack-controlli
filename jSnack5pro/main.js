// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array

// PUNTI CRITICI
// - Assicurarsi che l'input sia accettabile per il mio script
//		-> Ha inserito qualcosa?
//		-> non accettare nulla al di fuori di numeri
// in entrambi i casi, fai ripetere l'inserimento per mantenere i 6 numeri richiesti dall'esercizio

var array = [], userInput, allClear = false;

for (var i = 0; i < 6; i++) {
	userInput = prompt ("Inserisci un numero:");
	
	// controlli input
	while (allClear == false) {
		// se l'utente non ha messo niente
		if (!userInput) {
			userInput = prompt ("Non hai inserito nulla, inserisci un numero:");
		}
		// se l'utente ha messo qualcosa al di fuori di un numero
		else if (isNaN(userInput)) {
			userInput = prompt ("Puoi inserire soltanto un numero:");
		}
		else {
			allClear = true;
		}
	}
	allClear = false;
	console.log(userInput);

	if (userInput%2 == 1) {
		array.push(userInput);
	}
}

alert('hai inserito i seguenti numeri dispari: ' + array);