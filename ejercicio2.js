class Hero {
    constructor(name) {
        this.name = name;
        this.ranking = '00';
        this.health = 100;
        this.damage = 5;
        this.experience = 0;
    }

    talk(name) {
        console.log(`Hi ${name}`);
    }

    attack(damage) {
        console.log(`${this.name} attacks, dealing ${damage} damage.`);
        this.experience += 10;
    }

    takeDamage(damage) {
        this.health -= damage;
        console.log(`${this.name} takes ${damage} damage, and has ${this.health} health left.`);
    }
}

const createHero = (name = 'heroe') => {
    return new Hero(name);
}

const hero = createHero('Adolin');
hero.talk('Kaladin');
hero.attack(10);
hero.takeDamage(20);