

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
        let startPika = document.getElementById('Pika')
        let startCharz = document.getElementById('Charz')
        startPika.getElementsByTagName("img")[0].src = "https://i.imgur.com/mUYo7MZ.png";
        startCharz.getElementsByTagName("img")[0].src = "https://i.imgur.com/G4yR30H.png";
        charizard.HP = 100
        pikachu.HP = 100
    })
}


const newGameBtn = document.getElementById("newGame")
newGameBtn.addEventListener('click', render)


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
    let tBoltGif = document.getElementById("Pika")
    tBoltGif.getElementsByTagName("img")[0].src = " https://imgur.com/PpGVhBm.gif";
   
    if (turn === 1) {
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
    editHPBar(charizard)
}

function Tackle(target) {
    let tackleGif = document.getElementById("Pika")
    tackleGif.getElementsByTagName("img")[0].src = "https://imgur.com/etUEmyU.gif";
    const damage = 10
    target.HP -= damage
    effective = "Effective"
    turn *= -1
    displayMove("Pikachu", "Tackle", effective )
    editHPBar(charizard)
}

function Thunder(target) {
    let thunderGif = document.getElementById("Pika")
    thunderGif.getElementsByTagName("img")[0].src = "https://imgur.com/OeJWznC.gif";

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
    editHPBar(charizard)
}

function sixMil(target) {
    let sixMilGif = document.getElementById("Pika")
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
    editHPBar(charizard)
}


function flamethrower(target) {
    let flameGif = document.getElementById("Charz")
    flameGif.getElementsByTagName("img")[0].src = "https://imgur.com/8p2QrQA.gif";
    let damage = 20
    target.HP -= damage
    effective = "Effective"
   displayMove("Charizard", "Flamethrower", effective)
   editHPBar(pikachu)
}

function wingAtk(target) {
    let wingGif = document.getElementById("Charz")
    wingGif.getElementsByTagName("img")[0].src = "https://imgur.com/o6n5Uzv.gif";
    let damage = 20
    if(target.type === "ElectricType") {
        target.HP -= damage / 2
        effective = "Uneffective"
    } else { 
        target.HP -= damage
    }
    displayMove("Charizard", "Wing Attack", effective)
    editHPBar(pikachu)
}

function blastBurn(target) {
    let blastGif = document.getElementById("Charz")
    blastGif.getElementsByTagName("img")[0].src = "https://imgur.com/YdL42bo.gif";
    let damage = 45
    target.HP -= damage
    charizard.HP -= 30
    effective = "Effective"
    displayMove("Charizard", "Blast Burn", effective)
    editHPBar(pikachu)
    
    
}



function editHPBar (target) {
    if(target === charizard) {
        let changeOppHP = document.getElementById("OppHP")
        changeOppHP.innerHTML = target.HP
    }
   else if (target === pikachu) {
    let changeMyHP = document.getElementById("MyHP")
    changeMyHP.innerHTML = target.HP
   }    
}

render()
