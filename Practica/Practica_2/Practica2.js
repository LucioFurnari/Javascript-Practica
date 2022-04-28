class Player {
    constructor(life,damage,defense){
        this.PlayerLife = life;
        this.PlayerDamage = damage;
        this.PlayerDefense = defense
    }
    showLife(){
        console.log(`Esta es la vida del jugador: ${this.PlayerLife}`);
    }
    EquiArmor(NewDefense){
        this.PlayerDefense = NewDefense;
        console.log(`Tu defensa es ${this.PlayerDefense}`);
    }
    playerdefense(life,damage,defense){
        console.log(`Al jugador le queda: ${(life + defense)- damage } de vida`);
    }
}
class zombie {
    constructor(life,damage){
        this.ZombieLife = life;
        this.ZombieDamage = damage;
    }
    showLife(){
        console.log(`Esta es la vida del zombie: ${this.ZombieLife}`);
    }
    // showZombieDamage(){
    //     return this.ZombieDamage;
    // }
}
// let life = 100;
// let defense = 5;
let Bastio = new Player(100,20,5);
let Zombie = new zombie(100,20);
let BruteZombie = new zombie(200,25)

function PlayerAttack(life,damage){
    console.log(`Al zombie le queda ${life - damage}`);
}
// function PlayerDefense(life,damage,defense){
//     console.log(`Al jugador le queda: ${(life + defense)- damage } de vida`);
// }
function ZombieAttack() {
    option = prompt("El zombie ataca, que quieres hacer ? atacar o defenderte");
    if (option == "atacar"){
        PlayerAttack(Zombie.ZombieLife, Bastio.PlayerDamage);
    }else if (option == "defenderte"){
        Bastio.playerdefense(Bastio.PlayerLife, Zombie.ZombieDamage, Bastio.PlayerDefense);
    }

}
function Loot() {
    choose = prompt("Quieres buscar en la casa ? si o no")
        if (choose == "si"){
            console.log("Encontraste un chaleco de cuero");
            Bastio.EquiArmor(20)
        }   
    
}

function Location(location) {
    location = prompt("Donde quieres ir? casa1 o casa2")
    switch (location) {
        case "casa1":
            console.log("Estas en casa 1");
            Loot();
            ZombieAttack()
            break;
        case "casa2":
            console.log("Estas en casa 2");
            break;
    }
}

Location()
Bastio.showLife();
// Zombie.showLife();
// PlayerAttack(Zombie.ZombieLife, Bastio.PlayerDamage);
// PlayerDefense(Bastio.PlayerLife, Zombie.ZombieDamage, Bastio.PlayerDefense);
