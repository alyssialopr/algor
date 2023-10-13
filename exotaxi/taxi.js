const playlist = [
  "Anissa - Wejdene",
  "Empire State of Mind - Alicia Keys",
  "Golden - Harry Styles",
  "Cruel Summer - Taylor Swift",
  "Story of my Life - One Direction",
];

const personnage = [(prenom = "John"), (santeMent = 10)];

const taxi = [(radio = playlist), (feuxRouges = 30), (changeTaxi = 0)];

function playPlaylist() {
  const indexmusic = Math.floor(Math.random() * taxi.radio.length);
  const play = taxi[0].indexmusic;
  console.log(
    `La musique en cours est ${play}, Il reste ${taxi[1]} de feux rouges`
  );

  return play;
}

playPlaylist();
console.log(indexmusic);

console.log(taxi[2]);

for (let i = 0; i < taxi[1]; i++) {
  const musiqueJouee = playPlaylist();
  if (musiqueJouee === "Anissa - Wejdene") {
    personnage.santeMent -= 1;
    taxi[2] += 1;
    console.log(
      `Changement de taxi ! Santé mentale de ${personnage.prenom} : ${personnage.santeMent}`
    );
  }
  if (personnage.santeMent <= 0) {
    console.log(`${personnage.prenom} est devenu fou ! EXPLOSION !!`);
    break;
  }

  if (personnage.santeMentale > 0) {
    console.log(
      `${personnage.prenom} est bien arrivé à destination avec ${taxi.changeTaxi} changements de taxi.`
    );
  }
}
