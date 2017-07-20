var tab = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg",
"img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg"];
var click=0;
var choix1;
var choix2;
var recto = "img/index.png";
var images = document.getElementsByTagName("img");
var i1;
var i2;

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

for (let i=0; i < images.length; i++) {
  images[i].addEventListener('click', function () {
    choose(i) });
}

function choose(carte) {
//   if (click == 2) {
// 		// return;
//   console.log('test');
// }
	if (click == 0) {
		choix1 = tab[carte];
		images[carte].src =  tab[carte];
		click = 1;
    i1 = carte;
    // console.log("premier");
	}
	else {
		click = 2;
		choix2 = tab[carte];
    images[carte].src =  tab[carte];
    i2 = carte;
    // console.log('second');
    compare(choix1,choix2);
	}
}

function compare(a,b) {
	click = 0;
	if (a ==  b) {
    images[a].style.opacity = "0.5";
		images[b].style.opacity = "0.5";
    // alert('gagné');
	} else {
    setTimeout(retourne, 1000);
    // images[a].src = recto;
    // images[b].src = recto;
		// images[choix1].style.pointerEvents = "none";
// alert('perdu');
	}
}

function retourne () {
  images[i1].src= recto;
  images[i2].src= recto;
}
