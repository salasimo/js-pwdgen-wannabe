var nome = prompt("Ciao! Inserisci il tuo nome.");
var cognome = prompt("Ora inserisci il tuo cognome");
var colore = prompt("Infine, dimmi il tuo colore preferito");
var data = new Date();
console.log(anno);
var anno = data.getFullYear();
console.log(anno);

document.getElementById('pw').innerHTML = nome+cognome+colore+anno;
document.getElementById("container").setAttribute("class","visibile");
