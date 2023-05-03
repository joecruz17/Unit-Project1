let turn = 1
function render() {

}

function battle(playerPoke, AIPoke){
    while (playerPoke.HP > 0 && AIPoke.HP > 0) {
        if (turn === 1) {
            turn *= -1
        } else {
            turn *= -1
        }
    }

}

class Pokemon {
    constructor(name, HP, type) {
        this.name = name 
        this.HP = HP
        this.type = type
    }
   
    }

let pikachu = new Pokemon ("Pikachu", 100, "ElectricType") 


function displayMove(pokemonName, moveAttack, effectivity) {
    let moveBox = document.getElementById("AtkBox")
    moveBox.innerHTML = `${pokemonName} used ${moveAttack}! It was ${effectivity}! `
}



function ThunderBolt(target) {
    let damage = 20
    if(target.type === FlyingType || WaterType) {
    target.HP -= damage * 2
    } else target.HP -= damage
}
function Tackle(target) {
    const damage = 10
    target.HP -= damage
}

function Thunder(target) {
    let damage = 25
    if(target.type === FlyingType) {
    target.HP -= damage * 2
    } else target.HP -= damage
}

let charizard = new Pokemon("Charizard", 100, "FlyingType")

console.log(charizard)

function flamethrower(target) {
    let damage = 20
    target.HP -= damage
    return "Flamethrower"
}

function wingAtk(target) {
    let damage = 20
    if(target.type === ElectricType) {
        target.HP -= damage / 2
        } else target.HP -= damage
        return "Wing Attack"
}

function blastBurn(target, user) {
    let damage = 45
    target.HP -= damage
    user.HP -= 30
    return "Blast Burn"

}


function OppMove() {

}
function PokeAtk(moveFunc, ) {

}


