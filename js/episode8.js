let eleves = [];
let num = 1;
let resultat = false;
let eleve;


do {
	let nom = prompt("Entrez le nom de l'élève: " + num);
	let moyenne = parseInt(prompt("Entrez sa moyenne: "));
	eleve = {
		nom : nom,
		moyenne : moyenne
	};
	eleves.push(eleve);

	resultat = confirm('Voulez vous entrer un nouvel eleve? ');
	num++;

}while(resultat == true);
let eleveMoyenneMax = eleves.sort(function(previous, next){
	return next.moyenne - previous.moyenne;
})[0];

alert("l'élève " + eleveMoyenneMax.nom + " a la plus grande moyenne de : " +eleveMoyenneMax.moyenne);





