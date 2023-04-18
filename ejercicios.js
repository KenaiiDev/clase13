class Hero {
    constructor(name) {
        this.name = name;
        this.ranking = '00';
        this.health = 100;
        this.damage = 5;
        this.experience = 0;
    }
}

const createHero = (name = 'hero') => {
    return new Hero(name);
}

const hero = createHero('Kaladin');
console.log(hero)
