class ElectricType {
    constructor(name, HP, type) P{
        this.name = name 
        this.HP = HP
        this.type = type
    }
    SparkAtk(target) {
        const damage = 20
        if(target === FlyingType) {
        target.HP -= damage * 2
        } else target.HP -= damage

    }
    
}

class Pidgey 