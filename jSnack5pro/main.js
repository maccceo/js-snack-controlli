// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array

var array = [], userInput;

for (var i = 0; i < 6; i++) {
	userInput = prompt ("Inserisci un numero:");
	if (userInput%2 == 1) {
		array.push(userInput);
	}
}

console.log('hai inserito i seguenti numeri dispari: ' + array);