// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

// PUNTI CRITICI / MIGLIORIE
// - Assicurarsi che l'input sia accettabile per il mio script
//		-> Ha messo qualcosa?
//		-> Nome più cognome (almeno uno spazio)
//		-> Evitare numeri
//		-> Lettera maiuscola iniziale automatica

var user, nameFound = false, allClear = false, numberFound = false;
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


// chiedi il nome all'utente
user = prompt("Benvenuto, inserisca il suo nome e cognome:");
console.log('inserito ' + user);


// # # CONTROLLI # #

// ri-chiedi l'input fino a quando vengono soddisfatte tutte le condizioni richieste
while (allClear == false) {

	// No numeri: passo ad uno a uno i caratteri di user per cercarli
	for (var i = 0; i < user.length; i++) {
		//s e è un numero e non è uno spazio (che viene considerato numero)
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
		user = prompt("Benvenuto, inserisca il suo nome e cognome:");
	}

	// controllo che sia stato inserito uno spazio (nome cognome)
	// quando indexOf non trova (' ') restituisce l'indice -1
	else if (user.indexOf(' ') == -1) {
		user = prompt("Perfavore inserisca nome e cognome separati da uno spazio:");
	}

	// se non ci sono problemi procedi oltre
	else {
		allClear = true;
	}
}


// trasformo ogni lettera in minuscolo e lascio maiuscole solo le iniziali
user = user.toLowerCase();
user = user.replace(/\b\w/g, l => l.toUpperCase());
// The regex basically matches the first letter of each word within the given string and transforms only that letter to uppercase:
// 1) \b matches a word boundary (the beginning or ending of word);
// 2) \w matches the following meta-character [a-zA-Z0-9].


//controlla se il nome inserito dall'utente è in lista
for (var i = 0; i < guest.length; i++) {
	if (user == guest[i]) 		nameFound = true;
}


//comunica se può partecipare
if (nameFound) {
	alert("Può entrare");
} else {
	alert("Spiacente, il nome " + user + " non è presente nella nostra lista. Aggiorni la pagina per provare di nuovo.");
}