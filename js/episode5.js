let nom=prompt('Quel est votre nom?');
let prenom=prompt('Quel est votre prénom?');

let sexe;
let titre;

sexe=prompt('De quel sexe etes vous? entrez homme ou femme');

if (sexe=='homme') {
	titre='Mr';
}else if (sexe=='femme') {
	titre='Mme';
}else{
	alert('entrez uniquement homme ou femme');
}

let personne={
	nom:nom,
	prenom:prenom,
	sexe:sexe,
	titre:titre
 };
console.log(personne);