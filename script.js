

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
        btn.addEventListener("click", () => move.attack(charizard))
    })
}


function displayMove(pokemonName, moveAttack, effectivity) {
    const moveBox = document.getElementById("display")
    moveBox.innerHTML = `${pokemonName} used ${moveAttack}! It was ${effectivity}! `
    setTimeout(endGame, 2500)
}


const charzAtks = [flamethrower, wingAtk, blastBurn]

function OppMove() {
   const idx =  Math.floor(Math.random() * charzAtks.length)
   let charAtk = charzAtks[idx] 
   charAtk(pikachu)
   turn *= -1
}

function endGame() {
    if (pikachu.HP <= 0) {
        let pikaDead = document.getElementById('display')
        pikaDead.innerHTML = "Pikachu Fainted. You Lost To Arthur"
    } else if (charizard.HP <= 0) {
        let charDead = document.getElementById("display")
        charDead.innerHTML = "Charizard Fainted! You win! You're the best coder in the world"
    } else if (pikachu.HP <= 0 && charizard.HP <= 0) {
        let tieGame = document.getElementById("display")
        tieGame.innerHTML = "Its a Tie! Try again"
    } else {
        const whosTurn = document.getElementById("display")
             if (turn === 1) {
                whosTurn.innerHTML = "Choose a Move !"
             } else if (turn === -1) {
                whosTurn.innerHTML = "Charizard is about to Attack!"
                setTimeout(OppMove, 2000)
             }
    }
    
}





let effective = "Effective"

function ThunderBolt(target) {
    if (turn = 1) {
    let damage = 20
   
    if(target.type === "FlyingType" || "WaterType") {
        target.HP -= damage * 2
        effective = "Super-Effective"
    } else { 
        target.HP -= damage
        effective = "Effective"
    }
    turn *= -1
    displayMove("Pikachu", "ThunderBolt", effective )
    }
}

function Tackle(target) {
    const damage = 10
    target.HP -= damage
    effective = "Effective"
    turn *= -1
    displayMove("Pikachu", "Tackle", effective )
}

function Thunder(target) {
    if (turn = 1) {
    let damage = 25
    if(target.type === "FlyingType") {
        target.HP -= damage * 2
        effective = "Super-Effective"
    } else { 
        target.HP -= damage
        effective = "Effective"
    }
    turn *= -1
    displayMove("Pikachu", "Thunder", effective )
    }
}

function sixMil(target) {
    if (turn = 1) {
    let damage = 50
    if(target.type === "FlyingType") {
        target.HP -= damage * 2
        effective = "Super-Effective"
    } else { 
        target.HP -= damage
        effective = "Effective"
    }
    turn *= -1
    displayMove("Pikachu", "6 Million Volts", effective )
    }
}


function flamethrower(target) {
    let damage = 20
    target.HP -= damage
    effective = "Effective"
   displayMove("Charizard", "Flamethrower", effective)
}

function wingAtk(target) {
    let damage = 20
    if(target.type === "ElectricType") {
        target.HP -= damage / 2
        effective = "Uneffective"
    } else { 
        target.HP -= damage
    }
    displayMove("Charizard", "Wing Attack", effective)
}

function blastBurn(target) {
    let damage = 45
    target.HP -= damage
    charizard.HP -= 30
    effective = "Effective"
    displayMove("Charizard", "Blast Burn", effective)

}



function editHPBar (target) {
    let changeMyHP = document.getElementById("MyHP")
    changeMyHP.innerHTML = target.HP
}


render()