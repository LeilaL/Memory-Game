var tab = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg",
"img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg"];
var clique=0;
var choixun;
var choixdeux;

function random(tab){
	var j, x, i;
	for(i = tab.length; i; i--) {
		j = Math.floor(Math.random() * i);
		x = tab[i-1];
		tab[i-1] = tab[j];
		tab[j] = x;
	}
}
random(tab);

function choisir(carte) {
	if (clique == 2) {
		return;
	}
	if (clique == 0) {
		choixun = carte;
		document.images[carte].src =  tab[carte];
		document.images[choixun].style.pointerEvents = 'none';
		clique = 1;
	}
	else {
		clique = 2;
		choixdeux = carte;
		document.images[carte].src =  tab[carte];
		timer = setTimeout("verif()", 500);
	}
}

function verif() {
	clique = 0;
	if (tab[choixdeux] ==  tab[choixun]) {
		document.images[choixun].style.pointerEvents = 'none';
		document.images[choixun].style.opacity = '0.3';
		document.images[choixun].style.pointerEvents = 'none';
		document.images[choixdeux].style.opacity = '0.3';
	} else {
		document.images[choixun].style.pointerEvents = 'auto';
		return;
	}
	if (paires==7) {
   document.getElementsById.innerHTML ="Tu as gagné !"
	}
}
