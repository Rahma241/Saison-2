let noteEleve=[]; 
let somme=0;
let ajoutNote=false;

do{
	ajoutNote=confirm('Voulez vous ajouter une note? ');
	noteEleve.push(Number(prompt('Entrez votre note en mathématique: ')));
}while(ajoutNote==true);

if (ajoutNote==false) {
		for (let i of noteEleve) {
		somme +=i;
	}	
}
alert('Votre moyenne en mathématique est ' + somme /noteEleve.length);






