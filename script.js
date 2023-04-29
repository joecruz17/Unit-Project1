class Pokemon {
    constructor(name, HP, type) {
        this.name = name 
        this.HP = HP
        this.type = type
    }
   
    }

let Pikachu = new Pokemon ("Pikachu", 100, "ElectricType") 


function SparkAtk(target) {
    let damage = 20
    if(target.type === FlyingType || WaterType) {
    target.HP -= damage * 2
    } else target.HP -= damage
}
function Tackle(target) {
    const damage = 10
    target.HP -= damage
}

function ThunderBolt(target) {
    let damage = 25
    if(target.type === FlyingType) {
    target.HP -= damage * 2
    } else target.HP -= damage
}



