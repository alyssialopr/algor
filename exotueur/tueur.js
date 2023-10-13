let tueur = [
    nom = "Jason",
    pointDeVie = 100,
];

let prenom = [
    "James",
    "Annie",
    "Roberto",
    "Juan",
    "Leo",
    "Adrian",
    "Albane",
    "Jean",
    "Louis",
    "Elliot",
    "Hugo",
    "Léonie",
    "Mia",
    "Manon",
    "Juliette"
];

let caracteristique = [
  (blonde = [0.7, 0.3, 0.9]),
  (nerd = [0.5, 0.2, 0.6]),
  (gothique = [0.3, 0.4, 0.2]),
  (sportif = [0.1, 0.9, 0.3]),
  (bookworm = [0.9, 0.1, 0.5]),
  (populaire = [0.3, 0.5, 0.4]),
  (timide = [0.7, 0.4, 0.7]),
  (bête = [0.8, 0.5, 0.2]),
];

function survivor() {
    let name = prenom[getRandomNumber(0, prenom.length - 1)];
    let characteristic = (caracteristique[getRandomNumber(0, caracteristique.length - 1)]);
    return survivor
}

console.log(`${survivor}`)