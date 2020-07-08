// ******************* Episode 1 ************************

let email=prompt("entrez votre adresse mail : ");  //declaration variable email et affichage du message
let emailRegexp=new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$','g'); //initialisation de la variable à une RegExp 

// vérification de l'email à l'expression regulière

if (email.match(emailRegexp)) {                  
	alert('adresse email valide');
}
else{
	
	alert('adresse email invalide');

/**
 ********************* Episode 2 *********************************
 **/

let mdp = prompt("entrez votre mot de passe: ");  //déclaration de la variable et affichage du msg
 let caractere = /.{8,}/g;						//vérifie si il ya 8 minimum caractères
 let chiffre = /\d+/g;                         //verifie si ya au moins un chiffre dans dans les caractères saisis.
 let majuscule = /[A-Z]+/g;					   // verifie qu'il y'a une majuscule


// verification du mot de passe aux l'expressions régulières
 if (caractere.test(mdp) && chiffre.test(mdp) && majuscule.test(mdp)) {
     alert("Mot de passe Valide");					
} else {
     alert("Votre mot de passe est invalide");
 }

//##
//##


// ************************* Episode 3 **********************************

let nom= prompt('Quel est votre nom?');                     //declaration de la variable pour le nom et affichage du message
let tmp= parseInt(prompt('combien d\'enfants avez vous?')); //declaration de la variable pour le nombre d'enfants et affichage du message

if (tmp==1) {                                               //si le nombre d'enfants = 1

alert("bonjour " + nom + " vous avez " + tmp + " enfant");

}else if (tmp ==0) { 
	alert("bonjour " + nom + " vous n'avez pas d'enfant");
}else if (tmp>1) {
	alert("bonjour " + nom + " vous avez " + tmp + " enfants");
}
//##
//##

//***************************** Episode 4 ***************************//

let jour=Number( prompt("entrez votre jour de naissance"));
let mois= Number(prompt("entrez votre mois de naissance"));
let annee= Number(prompt("entrez votre année de naissance"));

if ((jour>=1 && jour<32) && (mois>=1 && mois<13) && (annee>=1000 && annee<2021)) {
	alert('Vous êtes née le : ' +jour + '/' + mois+ '/' +annee);
}
else{
	alert('Veillez bien renseigner les champs');
}


/**
*************************** Episode 5 **************************
**/

let nom=prompt('Quel est votre nom?');      // declaration variable pour le nom et affichage du message
let prenom=prompt('Quel est votre prénom?'); // declaration variable pour le prenom et affichage du message

let sexe;                                    //declaration de la variable sexe
let titre;									//declaration de la variable titre

sexe=prompt('De quel sexe etes vous? entrez homme ou femme'); //affichage du message 

if (sexe=='homme') {
	titre='Mr';
}else if (sexe=='femme') {
	titre='Mme';
}else{
	alert('entrez uniquement homme ou femme');
}

let personne={                            //creation de l'objet personne avec ses clées
	nom:nom,
	prenom:prenom,
	sexe:sexe,
	titre:titre
 };
console.log(personne);                  // affichage de l'objet
//##
//##


// *************************** Episode 6 ************************************ //

let tableau=[];                     //declaration du tableau  

	tableau[1]='lundi',             //affectation des jour à un nombre
	tableau[2]='mardi',
	tableau[3]='mercredi',              
	tableau[4]='jeudi',              
	tableau[5]='vendredi',
	tableau[6]='samedi',
	tableau[7]='dimanche';          

alert(tableau[Number(prompt('Entrez un nombre entre 1 et 7:'))]); // affichage du message


//************************* Episode 7 ******************************//
 
  // declaration des variables
let noteEleve=[]; 
let somme=0;
let ajoutNote=false;

 // ajout des notes
do{
	ajoutNote=confirm('Voulez vous ajouter une note? ');
	noteEleve.push(Number(prompt('Entrez votre note en mathématique: ')));
}while(ajoutNote==true);
 
 // calcul de la moyenne

if (ajoutNote==false) {
		for (let i of noteEleve) {
		somme +=i;
	}	
}

 // Affichage de la moyenne
alert('Votre moyenne en mathématique est ' + somme /noteEleve.length);

//##
//##

// ************************ Episode 8 ***********************
   // declaration des variables
let eleves = [];                 
let num = 1;
let resultat = false;
let eleve;

   // ajout des eleves et moyennes
do {
	let nom = prompt("Entrez le nom de l'élève: " + num);
	let moyenne = parseInt(prompt("Entrez sa moyenne: "));
	eleve = {
		nom : nom,
		moyenne : moyenne
	};
	eleves.push(eleve); 

    // si oui on ajoute des eleves, si non on sort de la boucle

	resultat = confirm('Voulez vous entrer un nouvel eleve? ');
	num++;

}while(resultat == true);

   // trie de la moyenne par ordre croissant 

let eleveMoyenneMax = eleves.sort(function(previous, next){
	return next.moyenne - previous.moyenne;

})[0];     //affichage du premier élève avec moyenne

