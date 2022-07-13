const symbols = ["🍧", "🥨", "🍗", "☕", "🥪", "🍌", "🍔", "🍕"];

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
allCards.innerHTML = "";

// 02 - Je fais une fonctione dans laquelle je demande :
   //01 - Pour chaque élememnt applique une fonction qui me donnera deux paramètres à savoir l'élément et son indice
   //02 - Je déclare un élement qui va créer un div vide pour chaque élément à insérer à la suite 
   //03 - J'injecte mes éléments dans le tableau.
   //04 - J'ajoue à la suite de mon allcard les éléments

function repartition() {
  symbols.forEach(function (element, indice) {
    const targeter = document.createElement("div");
    targeter.innerHTML = "<div class='target'>"+
    "<div class='target_content'>" + element + "</div>" + "</div>";
    allCards.appendChild(targeter);
  });
}

repartition();