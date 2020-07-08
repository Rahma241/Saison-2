let email=prompt("entrez votre adresse mail :");
let emailRegexp=new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$','g');

if (email.match(emailRegexp)) {
	console.log('adresse email valide');
	alert('adresse email valide');
}
else{
	console.log('adresse email invalide');
	alert('adresse email invalide');
}