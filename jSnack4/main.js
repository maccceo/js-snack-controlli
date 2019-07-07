// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var user, found = false;
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