const playlist = [
    "Anissa - Wejdene",
    "Empire State of Mind - Alicia Keys",
    "Golden - Harry Styles",
    "Cruel Summer - Taylor Swift",
    "Story of my Life - One Direction"];
    
const personnage = [
    prenom = "John",
    santeMent = 10,
];

const taxi = [
    radio = playlist,
    feuxRouges = 30,
    changeTaxi = 0,
]

function JouerPlaylist(){
    const indexmusic = Math.floor(Math.random() * playlist.length);
    const play = playlist[indexmusic];
    console.log(
      `La musique en cours est ${play}, Il reste ${taxi.feuxRouges} de feux rouges`
    );
    return play;
}

for (let i = 0; i < taxi.feuxRouges; i++) { 
    const MusiqueJouee = JouerPlaylist;
    if (MusiqueJouee === "Anissa - Wejdene") {
      personnage.santeMent -= 1;
      taxi.changeTaxi += 1;
      console.log(
        `Changement de taxi ! Santé mentale de ${personnage.prenom} : ${personnage.santeMent}`
      );
    }
    if (personnage.santeMent === 0) {
    console.log(`${personnage.prenom} est devenu fou ! EXPLOSION !!`);
    break;
    }

    if (personnage.santeMentale > 0) {
      console.log(
        `${personnage.prenom} est bien arrivé à destination avec ${taxi.changeTaxi} changements de taxi.`
      );
    }
}
