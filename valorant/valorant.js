// let partie = 24;

let attaquants = [
  "Omen_Att",
  "Phoenix_Att",
  "Jett_Att",
  "Fade_Att",
  "Chamber_Att",
];
let defenseurs = [
  "Omen_Def",
  "Phoenix_Def",
  "Jett_Def",
  "Fade_Def",
  "Chamber_Def",
];

let mancheGagnantesA = 0;
let mancheGagnantesD = 0;

let randomAttaquant = Math.floor(Math.random() * 5);
let randomDefenseur = Math.floor(Math.random() * 5);

function simulationManche() {
  let randomAttaquant = Math.floor(Math.random() * 5);
  let randomDefenseur = Math.floor(Math.random() * 5);

  let x = Math.floor(Math.random() * 2);
  //   console.log(x);
  if (x == 0) {
    console.log(
        `${attaquants[randomAttaquant]} a tué ${defenseurs[randomDefenseur]}`
      );
      defenseurs.splice[(randomDefenseur, 1)];
  } else {
    console.log(
      `${defenseurs[randomDefenseur]} a tué ${attaquants[randomAttaquant]}`
    );
      attaquants.splice[randomAttaquant, 1];
  }

  let spike = Math.random() * 100;
  if (x == 0) {
    console.log(spike);
    if (spike >= 60) {
      console.log("L'équipe des attaquants a pu amorcé le Spike !");
    } else if (spike < 40) {
      console.log("L'équipe des attaquants n'a pas pu amorcé le Spike !");
    }
  } else if (x == 1) {
    console.log(spike);
    if (spike > 40) {
      console.log("L'équipe des attaquants a pu amorcé le Spike !");
    } else if (spike < 60) {
      console.log("L'équipe des attaquants n'a pas pu amorcé le Spike !");
    }
  }

  let duel = Math.random() * 100;
  if (spike >= 40) {
    console.log(duel);
      if (duel <= 70) {
        mancheGagnantesA++;
      } else {
          mancheGagnantesD++;
    }
  }
}

for (let i = 0; i <= 40; i++) {
  console.log(i);
  simulationManche();
  console.log(
    `Résultat: Défense=${mancheGagnantesD} Attaque = ${mancheGagnantesA}`
  );
}

if (mancheGagnantesA >= 13) {
    if (mancheGagnantesA > mancheGagnantesD) {
    console.log("Les gagnants sont les attaquants");
  } else if (mancheGagnantesD >= 13) {
    console.log("Les gagnants sont les défenseurs");
    } else {
        console.log("Match Nul");
  }
} else if (mancheGagnantesD >= 13) {
    if (mancheGagnantesA > mancheGagnantesD) {
      console.log("Les gagnants sont les attaquants");
    } else if (mancheGagnantesD >= 13) {
      console.log("Les gagnants sont les défenseurs");
    } else {
      console.log("Match Nul");
    }
}