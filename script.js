

class Pokemon {
    constructor(name, HP, type) {
        this.name = name 
        this.HP = HP
        this.type = type
    }
}


let turn = 1
let pikachu = new Pokemon ("Pikachu", 100, "ElectricType") 
let charizard = new Pokemon("Charizard", 100, "FlyingType")

const moveArr =[
    { id: "tbolt", attack : ThunderBolt}, 
    { id: "tackle", attack : Tackle}, 
    { id: "thunder", attack : Thunder}, 
    { id: "sixmil", attack:  sixMil} 
]


function render() {
    moveArr.forEach((move) => {
        let btn = document.getElementById(move.id)
        // console.log(btn)
        btn.addEventListener("click", () => move.attack(charizard))
    })
    
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





function displayMove(pokemonName, moveAttack, effectivity) {
    let moveBox = document.getElementById("display")
    moveBox.innerHTML = `${pokemonName} used ${moveAttack}! It was ${effectivity}! `
}


const charzAtks = [flamethrower, wingAtk, blastBurn]

function OppMove(target) {
    charzAtks.forEach ((oppMove) => {
        
    }
}



function ThunderBolt(target) {
    let damage = 20
    let effective = ""
    if(target.type === "FlyingType" || "WaterType") {
        target.HP -= damage * 2
        effective = "Super-Effective"
    } else { 
        target.HP -= damage
        effective = "Effective"
    }
    displayMove("Pikachu", "ThunderBolt", effective )
}
function Tackle(target) {
    const damage = 10
    target.HP -= damage
    effective = "Effective"
    displayMove("Pikachu", "Tackle", effective )
}

function Thunder(target) {
    let damage = 25
    if(target.type === "FlyingType") {
        target.HP -= damage * 2
        effective = "Super-Effective"
    } else { 
        target.HP -= damage
        effective = "Effective"
    }
    displayMove("Pikachu", "Thunder", effective )
}

function sixMil(target) {
    let damage = 50
    if(target.type === "FlyingType") {
        target.HP -= damage * 2
        effective = "Super-Effective"
    } else { 
        target.HP -= damage
        effective = "Effective"
    }
    displayMove("Pikachu", "6 Million Volts", effective )
}


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



function PokeAtk() {
    
}

render()


