// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

// PUNTI CRITICI / MIGLIORIE
// - Assicurarsi che l'input sia accettabile per il mio script
//		-> Ha messo qualcosa?
//		-> Nome più cognome (almeno uno spazio)
//		-> Evitare numeri
//		-> Lettera maiuscola automatica
// - Nel caso il nome non sia presente, far riprovare l'utente

var user, found = false, allClear = false, numberFound = false;
var guest = [
	"Liberatore Costantini",
	"Bruno Aiolfi",
	"Settimio Donati",
	"Luigi Leccese",
	"Eulalia Croce",
	"Crocetta Bassi",
	"Attilio Antonini",
	"Eugenio Perugia",
	"Eloisa Alessi",
	"Lino Benetton",
	"Demetra Selvaggio"
];

//chiedi il nome all'utente
user = prompt("Benvenuto, inserisca il suo nome e cognome:");
console.log('inserito ' + user);

//ri-chiedi l'input fino a quando vengono soddisfatte tutte le condizioni richieste
while (allClear == false) {

	// passo ad uno a uno i caratteri di user per cercare numeri
	for (var i = 0; i < user.length; i++) {
		//se è un numero e non è uno spazio (che viene considerato numero)
		if ( !isNaN(user[i]) && user[i] != ' ') {
			numberFound = true;
		}
	}
	if(numberFound) {
		numberFound = false;
		user = prompt("Formato non valido, inserisca nome e cognome:");
	}

	// controllo che sia stato inserito qualcosa
	else if (!user) {
		user = prompt("Benvenuto, inserisca il suo nome:");
	}

	// controllo che sia stato inserito uno spazio (nome cognome)
	else if (user.indexOf(' ') == -1) {
		user = prompt("Inserisca nome e cognome separati da uno spazio:");
	}

	// se non ci sono problemi procedi
	else {
		allClear = true;
	}
}

//controlla se è in lista
for (var i = 0; i < guest.length; i++) {
	if (user == guest[i]) 		found = true;
}

//comunica se può partecipare
if (found) {
	console.log("Può entrare");
} else {
	console.log("Spiacente, il nome " + user + " non è presente nella nostra lista.");
}