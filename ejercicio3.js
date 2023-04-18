class Hero {
    constructor(name) {
        this.name = name;
        this.ranking = '00';
        this.health = 100;
        this.damage = 5;
        this.experience = 0;
        this.isAlive = true
    }

    talk(name) {
        console.log(`Hi ${name}`);
    }

    attack(enemy) {
        enemy.takeDamage(this.damage);
        if(!enemy.isAlive){
            this.experience += 10;
            console.log(`${this.name} has killed ${enemy.name} and has ${this.experience} experience points.`);
        }
    }

    takeDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            this.health = 0;
            this.isAlive = false;
            console.log(`${this.name} has died.`);
        } else {
            this.isAlive = true;
            console.log(`${this.name} takes ${damage} damage, and has ${this.health} health left.`);
        }
    }
}

const createHero = (name = 'heroe') => {
    return new Hero(name);
}

const hero = createHero('Adolin');
const enemy = createHero('Sadeas');

hero.attack(enemy);
enemy.attack(hero);

enemy.health = 3;

hero.attack(enemy);