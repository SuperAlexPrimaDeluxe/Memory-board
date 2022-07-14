// CODE POUR MON TIMER 

function winRel() {
  location.reload();
}
let count = 15;
const lebtn = document.querySelector(".btn--restart");
const interval = setInterval(function () {
  document.querySelector(".count").innerHTML = count;
  count--;
  if (count === 0) {
    clearInterval(interval);
    document.querySelector(".count").innerHTML = 'Done';
    lebtn.style.display = "block";
    lebtn.addEventListener("click", winRel);
    // or...
    alert("Gameover");
  }
}, 1000);

//CODE POUR LE RETOURNEMENT DE MES CARTES


const symbols = ["🍧", "🥨", "🍗", "☕", "🥪", "🍌", "🍔", "🍕"];

const doubleSymb = symbols.concat(symbols);
console.log("ICI CONCAT :")
console.log(doubleSymb);
// foreach

console.log("STEP01 - Pour chaque élément du tableau j'affiche un hello avec foreach");
symbols.forEach(function () {
  console.log('Salut');
});
console.log("OK");

// Utilisation d'un paramètre

console.log("STEP02 - J'affiche tous les éléments de mon tableau via une fonction et un *paramètre dont le nom est choisi par mes soins");
symbols.forEach(function (element) {
  console.log(element);
});
console.log("OK");

// Utilisation d'un paramètre + de son indice

console.log("STEP03 - J'affiche tous les éléments de mon tableau via une fonction et un *paramètre dont le nom est choisi par mes soins + l'indice du paramètres");
symbols.forEach(function (element, indice) {
  console.log(element, indice);
});
console.log("OK");

// fonction distribution 

// 01 - Je vais chercher le conteneur global dans mon html et je rend le contenu vide 

const allCards = document.querySelector(".view");
const randomizedef = mathrr();
allCards.innerHTML = "";

// 02 - Je fais une fonctione dans laquelle je demande :
//01 - Pour chaque élememnt applique une fonction qui me donnera deux paramètres à savoir l'élément et son indice
//02 - Je déclare un élement qui va créer un div vide pour chaque élément à insérer à la suite 
//03 - J'injecte mes éléments dans le tableau.
//04 - J'ajoue à la suite de mon allcard les éléments

function repartition() {
  randomizedef.forEach(function (element, indice) {
    const targeter = document.createElement("div");
    targeter.innerHTML = "<div class='target'>" +
      "<div class='target_content'>" + element + "</div>" + "</div>";
    allCards.appendChild(targeter);
  });
}

function decouvrir(){
  let totaldiscover = document.querySelectorAll(".reveal");
  if (totaldiscover.length > 1){
    return;
  }
  console.log("ZBEUBZBEUB---ZBEUBZBEUBZBEUBZBEUBZBEUBZBEUBZBEUBZBEUBZBEUBZBEUBZBEUBZBEUB");
  console.log(totaldiscover);
}

repartition();
reveal();
decouvrir();

function reveal() {
  this.classList.add("reveal");
}

document.querySelectorAll(".target").forEach(function (element2) {
  element2.addEventListener("click", reveal);
});

///OBJET ET FONCTION D'OBJETS

console.log("STEP04 - TEST DES OBJETS");

const mikado = {
  name: "mikado",
  type: "cat",
  age: 5,
  bieneduque: false,
  miaule: function () {
    console.log("miaaaaou");
  }
};

console.log(mikado);
mikado.miaule();

//MATH RANDOM

function mathrr() {

  let mixer;

  //resultadooo = Math.floor(Math.random() * 100) + 1; // *10 pour passer à un nombre non décimmal math floor pour arrondir et le +1 pour commencer à un.

  mixer = doubleSymb.sort(function () {
    return 0.5 - Math.random();
  });

  //console.log("055555555555555");
  //console.log(mixer);
  return mixer;

}



