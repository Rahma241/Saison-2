 let mdp = prompt("entrez votre mot de passe: ");
 let nombreCaractere = /.{8,}/g;
 let lettreMiniscule = /\d+/g; //veriefie si ya au moins un chiffre dans dans les caracter saisie.
 let lettreMajuscule = /[A-Z]+/g;
 if (nombreCaractere.test(mdp) && lettreMiniscule.test(mdp) && lettreMajuscule.test(mdp)) {
     alert("Mot de passe  Valide");
} else {
     alert("invalide");
 }

/*let mdp=prompt('Veuillez entrer votre mot de passe');
let Regexp=new RegExp('^([A-Z]{0,2})+$');

if (mdp.match(Regexp)) {
	console.log(mdp);
	alert('mot de passe valide');
}
else{
	console.log(mdp);
	alert('mot de passe invalide');
}

let mag=/[A-Z]{1}/;
let chiffre=/[0-9]/;
let caract=mdp.length;

if (mdp.match(mag)) {
	alert('votre mot de passe doit contenir une lettre majuscule');
}
else if (mdp.match(!chiffre)) {
	alert('votre mot de passe doit contenir au moins un chiffre');
}
else if (mdp.match(caract<8)) {
	alert('votre mot de passe doit contenir au moins 8 caractère');
}
else{
	alert('mot de passe valide');

}*/