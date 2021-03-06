// EXPLICATIONS DU FONCTIONNEMENT DES TABLEAUX VIA COMMENTAIRES ET CONSOLE LOG

const symbols = ["π§", "π₯¨", "π", "β", "π₯ͺ", "π", "π", "π"];
console.log("STEP01 - Affichage du tableau simple");
console.log(symbols);
console.log("OK");

console.log("STEP02 - Affichage d'une seule entrΓ©e d'un tableau");
console.log(symbols[3]);
console.log("OK");

console.log("STEP03 - Questionner sur l'inclusion dans un tableau ?");
console.log(symbols.includes("π")); // true si la valeur entre parenthΓ¨se est dans le tableau, false si pas dans le tableau
console.log("OK");

console.log("STEP04 - Additions de l'ensemble de tableau en une seule STRING");
const tab2 = ["2", "sauce", "π", "β", "7", "π", "π", "π"];
const totaltab = symbols + tab2 ;
console.log(totaltab);
console.log("OK");

console.log("STEP05 - Additions des tableaux en un nouveau tableau Γ  l'aide de concat ");
const totaltab2 = symbols.concat(tab2);
console.log(totaltab2); // retournera les 16 Γ©lΓ©ments dans un tableau
console.log("OK");

console.log("STEP06 - Retourner la taille d'un tableau ");
console.log(totaltab2.length); // retournera 16
console.log("OK");

console.log("STEP07 - Ajout d'un Γ©lΓ©ment dans un tableau avec la mΓ©thode push ");
totaltab2.push("test bob"); 
console.log(totaltab2);
console.log("OK");

console.log("STEP08 - Tableau de tableau");
const tabUtlimate = [
  ["π§", "π₯¨", "π", "β", "π₯ͺ", "π", "π", "π"],
  ["π§", "π₯¨", "y", "β", "π₯ͺ", "yπ", "π", "π"],
  ["π§", "π₯¨", "π", "x", "π₯ͺ", "x", "π", "π"]
];
console.log(tabUtlimate);
console.log("OK");

console.log("STEP09 - Affichage d'une seule valeur d'un tableau de tableau");
console.log(tabUtlimate[1][5]); // affiche ybanane
console.log("OK");