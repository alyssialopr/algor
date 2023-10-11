class pokemon {
  constructor(name, attack, defense, hp, luck) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.luck = luck;
  }

  isLucky() {
    const randomluck = Math.random()*100;
    return randomluck <= this.luck;
  }

  attackPokemon(adversaire) {
    if (this.isLucky()) {
      let degats = this.attack - adversaire.defense;
      if (degats > 0) {
        adversaire.hp -= degats;
      }
      return degats;
    }
  }
}

let mew = new pokemon("Mew", 70, 70, 50, 100);
let salameche = new pokemon("Salameche", 52, 43, 50, 60);


while (mew.hp > 0 && salameche.hp > 0) {
  if (mew.isLucky) {
    mew.attackPokemon(salameche);
    console.log(
      `Il reste ${salameche.hp} et ${pokemon.degats} de dégats ont été infligé`
    );
  }
        if (mew.hp <= 0) {
            console.log(`Adieu ${mew.name} tu as perdu ! `);
            break;
        }
        else {
            console.log(`${mew.name} est vainqueur !`);
            }
    
    if (salameche.isLucky) {
    salameche.attackPokemon(salameche);
    console.log(
    `Il reste ${mew.hp} et ${pokemon.degats} de dégats ont été infligé`
    );
    }
        if (salameche.hp <= 0) {
            console.log(`Adieu ${salameche.name} tu as perdu ! `);
            break;
        } else {
            console.log(`${salameche.name} est vainqueur !`);
            }
}
