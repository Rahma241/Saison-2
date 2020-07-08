let nom= prompt('Quel est votre nom?');
let tmp= parseInt(prompt('combien d\'enfants avez vous?'));

if (tmp==1) {
alert("bonjour " + nom + " vous avez " + tmp + " enfant");
}
else if (tmp ==0) {
alert("bonjour " + nom + " vous n'avez pas d'enfant");
}

else if (tmp>1) {
	alert("bonjour " + nom + " vous avez " + tmp + " enfants");
}


