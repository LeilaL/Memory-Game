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
