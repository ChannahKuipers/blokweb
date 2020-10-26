/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log('dille & kamille js');

// WISHLIST
var hartje = document.querySelector("div button.hartje");

hartje.addEventListener("click", addToFavorites);

function addToFavorites(event) {
    var clickedHartje = event.target;
    if (clickedHartje.innerHTML == "💔") {
        clickedHartje.innerHTML = "💚"; updateWishlist("plus");
    }
    else {
        clickedHartje.innerHTML = "💔"; updateWishlist("min");
    }
}
function updateWishlist(action) {
    let wishlistAmount = document.querySelector("a span");

    let currentAmount = wishlistAmount.innerHTML; currentAmount = parseInt(currentAmount);

    let newAmount; if (action == "plus") { newAmount = currentAmount + 1; }

    else { newAmount = currentAmount - 1; }
    wishlistAmount.innerHTML = newAmount;
}
//////////////////////////////////////////////////////////////

// FOTOALBUM INSPIREREN 
var fotos = ["foto0.jpeg", "foto1.jpeg", "foto2.jpeg", "foto3.jpeg", "foto4.jpeg", "foto5.jpeg"];

// DECLARATIES
var fotoImg = document.querySelector('#foto');
var terugButton = document.querySelector('#terug');
var verderButton = document.querySelector('#verder');

// toon het plaatje
var huidigFotoNr = 0;

function toonHuidigeFoto() {
    console.log('bladeren');
    fotoImg.src = 'images/' + fotos[huidigFotoNr];
}

// EVENTHANDLERS 
function bladerTerug() {
    huidigFotoNr = huidigFotoNr + 1;
    if (huidigFotoNr > fotos.length - 1) {//voorbij het einde 
        huidigFotoNr = 1; //terug naar begin
    }
    toonHuidigeFoto();
}

function bladerVerder() {
    huidigFotoNr = huidigFotoNr - 1;
    if (huidigFotoNr < 1) {//voorbij het begin 
        huidigFotoNr = fotos.length - 1; //terug naar het einde
    }
    toonHuidigeFoto();
}
// EVENTLISTENERS
terugButton.addEventListener('click', bladerTerug);
verderButton.addEventListener('click', bladerVerder);



/* // toon het plaatje
var huidigFotoNr = 0;
//toonThumbnails();

function toonHuidigeFoto() {
    console.log('bladeren');
    fotoImg.src = 'images/' + fotos[huidigFotoNr];

    //document.querySelectorAll('#thumbnails li').forEach( (thumbLi) => thumbLi.classList.remove('huidig'));
    //document.querySelector(`#thumbnails li:nth-of-type(${huidigFotoNr+1})`).classList.add('huidig');
}

EVENTHANDLERS
function bladerVooruit() {
   fotoImg.src = 'images/foto00';

    //huidigFotoNr = 1
    //huidigFotoNr = huidigFotoNr + 1;
    //if (huidigFotoNr > fotos.length -1) {//voorbij het einde
    //huidigFotoNr = 1; //terug naar begin
}
toonHuidigeFoto();
}

function bladerAchteruit() {
    fotoImg.src = 'images/foto01';
    huidigFotoNr = 2
    huidigFotoNr = huidigFotoNr - 1;
    if (huidigFotoNr < 1) {//voorbij het begin
    huidigFotoNr = fotos.length -1; //terug naar het einde
}
toonHuidigeFoto();
}


fotomenu home
var fotos = ["foto00.jpg","foto01.jpg","foto02.jpg","foto03.jpg"];

DECLARATIES
var fotoImg = document.querySelector('#foto');
var receptenButton = document.querySelector ('#recepten');
var keukenButton = document.querySelector ('#keuken');
var thuisButton = document.querySelector ('#thuis');
var thumbnailsUl = document.querySelector ('#thumbnails');

// toon het plaatje
var huidigFotoNr = 0;

function toonHuidigeFoto() {
    console.log('bladeren');
    fotoImg.src = 'images/' + fotos[huidigFotoNr];
}

// EVENTHANDLERS
function bladerNaarRecepten() {
    huidigFotoNr = 1;
    if (huidigFotoNr > fotos.length -1) {//voorbij het einde
    huidigFotoNr = 1; //terug naar begin
}
toonHuidigeFoto();
}

function bladerNaarKeuken() {
    huidigFotoNr = 2;
    if (huidigFotoNr < 1) {//voorbij het begin
    huidigFotoNr = fotos.length -1; //terug naar het einde
}
toonHuidigeFoto();
}

/*function bladerNaarThuis() {
    huidigFotoNr = 3;
    if(huidigFotoNr > fotos.length -1)
    {huidigFotoNr = 2}
}

// EVENTLISTENERS
receptenButton.addEventListener('click',bladerNaarRecepten);
keukenButton.addEventListener('click',bladerNaarKeuken);
//thuisButton.addEventListener('click',bladerNaarThuis);
*/