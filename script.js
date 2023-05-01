turn = 1

class Pokemon {
    constructor(name, HP, type) {
        this.name = name 
        this.HP = HP
        this.type = type
    }
   
    }

let pikachu = new Pokemon ("Pikachu", 100, "ElectricType") 


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
}

function wingAtk(target) {
    let damage = 20
    if(target.type === ElectricType) {
        target.HP -= damage / 2
        } else target.HP -= damage
}