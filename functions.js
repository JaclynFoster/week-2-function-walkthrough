let pikachuHp = 100;
let pikachuAttack = 30;

let shieldonHp = 120;
let sheildonAttack = 26;



function isAlive(defenderHp) {
if (defenderHp > 0) {
    return true
} else {
    return false
}
}

if(isAlive(pikachuHp)) {
    console.log("Pikachu Lives")
} else {
    console.log("Pikachu is no more")
}

const attack = (defenderHp, attackerAttack) => defenderHp - attackerAttack;

const getDiceRoll = () => Math.floor(Math.random() * 6 + 1);

const diceRoll = getDiceRoll();

for(let i = 0; i < diceRoll; i++) {
    if(isAlive(pikachuHp)) {
        console.log("Shieldon attacks Pikachu!")
        pikachuHp = attack(pikachuHp, sheildonAttack);
        console.log(`Pikachu HP at ${pikachuHp}`)
    } else {
        break;
    }
}
if (isAlive(pikachuHp)) {
    console.log("Pikachu has survived")
} else {
    console.log("Shieldon has won")
}