var tab = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg",
"img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg"];
var click=0;
var choix1;
var choix2;
var images = document.getElementsByTagName("img");
var recto = images[0].src;
var i1;
var i2;
var paires = 0;

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

if (images[carte].src == recto) {

	if (click == 0) {
		choix1 = tab[carte];
		images[carte].src =  tab[carte];
    i1 = carte;
    //images[i1].style.pointerEvents = "none";
    click = 1;
    // console.log("premier");
	}

	else {
		click = 2;
		choix2 = tab[carte];
    images[carte].src =  tab[carte];
    i2 = carte;
    // images[i2].style.pointerEvents = "none";
    // console.log('second');
    compare(choix1,choix2);
	}
}
}

function compare(a,b) {
	click = 0;
	if (a ==  b) {
    images[i1].style.opacity = "0.5";
		images[i2].style.opacity = "0.5";
    // images[a].style.pointerEvents = "none";
    paires++
    console.log(paires);
    // alert('gagné');
	}
//   if (paires ==7) {
//     document.getElementsById("corps").src = "img/giphy.gif";
// }
    else {
    setTimeout(function(){
      images[i1].src= recto;
      images[i2].src= recto;
    }, 500);
    // images[a].style.pointerEvents = "none";
    // images[i1].src = recto;
    // images[i2].src = recto;
		// images[i1].style.pointerEvents = "none";
// alert('perdu');
	}
}

// function retourne () {
//   images[i1].src= recto;
//   images[i2].src= recto;
// }
