// dark/light mode ////////////////////////////////////////////////

var darkLightKnop = document.querySelector('#modusKnop');
var bodyElement = document.querySelector('body');


// eventHandler Functie
function toggleDarkMode() {
	bodyElement.classList.toggle('dark');
}

darkLightKnop.addEventListener('click', toggleDarkMode );


// naam geven ////////////////////////////////////////////////

var formulier = document.querySelector('#naamformulier')
var naamPoppetje = document.querySelector('#poppetjesnaam')

function geefNaam (event) {
    event.preventDefault()

    var naam = formulier.elements['naam'].value ;

    var naamZeggen = ' ' + 'Hallo ik ben' + ' ' + naam + '!';

    naamPoppetje.textContent = naamZeggen ;

}
formulier.addEventListener('submit', geefNaam);

// budget ////////////////////////////////////////////////

var budget = 50 ;
var budgetTekst = document.querySelector('#budgetTekst')
var keuzeOpties = document.querySelector('#keuzes')

function updateBudget() {

    var naam = formulier.elements['naam'].value ;

    if (budget <= 0) {
        budgetTekst.textContent = naam + " je budget is op, ga werken om meer te kunnen kopen. Klik dubbel op werken."
        bodyElement.classList.add('budgetOp')
        keuzeOpties.hidden = true
        

    } else if (budget < 20) {
        budgetTekst.textContent = 'Jouw budget is nu ' + budget + " euro.";
        bodyElement.classList.add('budgetLaag')
        keuzeOpties.hidden = false

    } else {
        budgetTekst.textContent = 'Jouw budget is nu ' + budget + " euro.";
        bodyElement.classList.remove("budgetOp", "budgetLaag") 
        keuzeOpties.hidden = false
    }  
}

updateBudget();

// werken ////////////////////////////////////////////////

var werken = document.querySelector('#hogerBudget')

function werkenVoorBudget(){

    var naam = formulier.elements['naam'].value ;

    if(budget < 0){
        budget = 50
    } else {
        budget = budget + 50;
    }
   
    window.alert( naam + " heeft 50 euro verdiend");

    updateBudget();
}

werken.addEventListener('dblclick', werkenVoorBudget);

// huidskleur geven ////////////////////////////////////////////////

var huidImg = document.querySelector('#huidskleur');

var blauwpoppetje = document.querySelector('#blauwpoppetje');
var groenpoppetje = document.querySelector('#groenpoppetje');
var roodpoppetje = document.querySelector('#roodpoppetje');
var rozepoppetje = document.querySelector('#rozepoppetje');

function maakHuidBlauw() {
    huidImg.src = 'images/blauwpoppetje.png' ;
    huidImg.hidden = false ;
    budget = budget - 1 ;
    updateBudget();
}
function maakHuidGroen() {
    huidImg.src = 'images/groenpoppetje.png' ;
    huidImg.hidden = false ;
    budget = budget - 1 ;
    updateBudget();
}

function maakHuidRood() {
    huidImg.src = 'images/roodpoppetje.png' ;
    huidImg.hidden = false ;
    budget = budget - 1 ;
    updateBudget();
}

function maakHuidRoze() {
    huidImg.src = 'images/rozepoppetje.png' ;
    huidImg.hidden = false ;
    budget = budget - 1 ;
    updateBudget();
}

blauwpoppetje.addEventListener('click' , maakHuidBlauw );
groenpoppetje.addEventListener('click' , maakHuidGroen );
roodpoppetje.addEventListener('click' , maakHuidRood );
rozepoppetje.addEventListener('click' , maakHuidRoze );


// Outfit geven ////////////////////////////////////////////////

var outfitImg = document.querySelector('#outfit');

var galaoutfit = document.querySelector('#galaoutfit');
var zomeroutfit = document.querySelector('#zomeroutfit');
var groeneoutfit = document.querySelector('#groeneoutfit');
var hartjesoutfit = document.querySelector('#hartjesoutfit');

function geefGalaOutfit() {
    outfitImg.src = 'images/galaoutfit.png' ;
    outfitImg.hidden = false ;
    budget = budget - 30 ;
    updateBudget();
}
function geefGroeneOutfit() {
    outfitImg.src = 'images/groeneoutfit.png' ;
    outfitImg.hidden = false ;
    budget = budget - 10 ;
    updateBudget();
}

function geefHartjesOutfit() {
    outfitImg.src = 'images/hartjesoutfit.png' ;
    outfitImg.hidden = false ;
    budget = budget - 20 ;
    updateBudget();
}

function geefZomerOutfit() {
    outfitImg.src = 'images/zomeroutfit.png' ;
    outfitImg.hidden = false ;
    budget = budget - 10 ;
    updateBudget();
}

galaoutfit.addEventListener('click' , geefGalaOutfit )
groeneoutfit.addEventListener('click' , geefGroeneOutfit );
hartjesoutfit.addEventListener('click' , geefHartjesOutfit );
zomeroutfit.addEventListener('click' , geefZomerOutfit );

// Kapsel geven ////////////////////////////////////////////////

var kapselImg = document.querySelector('#kapsel');

var kuifje = document.querySelector('#kuifje');
var lang = document.querySelector('#lang');
var bob = document.querySelector('#bob');
var afro = document.querySelector('#fro');

function geefKuif() {
    kapselImg.src = 'images/kuifje.png' ;
    kapselImg.hidden = false ;
    budget = budget - 5 ;
    updateBudget();
}
function geefLang() {
    kapselImg.src = 'images/lang.png' ;
    kapselImg.hidden = false ;
    budget = budget - 10 ;
    updateBudget();
}

function geefBob() {
    kapselImg.src = 'images/bob.png' ;
    kapselImg.hidden = false ;
    budget = budget - 5 ;
    updateBudget();
}

function geefAfro() {
    kapselImg.src = 'images/fro.png' ;
    kapselImg.hidden = false ;
    budget = budget - 10 ;
    updateBudget();
}

kuifje.addEventListener('click' , geefKuif )
lang.addEventListener('click' , geefLang );
bob.addEventListener('click' , geefBob );
afro.addEventListener('click' , geefAfro );

// schoenen geven ////////////////////////////////////////////////

var schoenenImg = document.querySelector('#schoenen');

var gympen = document.querySelector('#gympenschoenen');
var kerst = document.querySelector('#kersthakken');
var verschillend = document.querySelector('#verschillendeschoenen');
var boots = document.querySelector('#bootsschoenen');

function geefGympen () {
    schoenenImg.src = 'images/gympen.png' ;
    schoenenImg.hidden = false ;
    budget = budget - 10 ;
    updateBudget();
}
function geefKerst() {
    schoenenImg.src = 'images/kersthakken.png' ;
    schoenenImg.hidden = false ;
    budget = budget - 10 ;
    updateBudget();
}

function geefBoots () {
    schoenenImg.src = 'images/boots.png' ;
    schoenenImg.hidden = false ;
    budget = budget - 10 ;
    updateBudget();
}

function geefVerschillend() {
    schoenenImg.src = 'images/verschillend.png' ;
    schoenenImg.hidden = false ;
    budget = budget - 10 ;
    updateBudget();
}

gympen.addEventListener('click' , geefGympen )
kerst.addEventListener('click' , geefKerst );
verschillend.addEventListener('click' , geefVerschillend );
boots.addEventListener('click', geefBoots );


