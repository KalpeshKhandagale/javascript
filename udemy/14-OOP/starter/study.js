// This is the main class syntax example:
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age; 
    }

    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
}

// This is the usage example:
const kalpesh = new Person('Kalpesh', 30);
kalpesh.greet();

// This is the inheritance example:
class Developer extends Person {
    constructor(name, age, skill) {
        super(name, age);
        this.skill = skill;
    }

    code() {
        console.log(`${this.name} codes in ${this.skill}`);
    }
}

const dev = new Developer('Kalpesh', 30,'JavaScript');
dev.greet();
dev.code();


class Workout {
    constructor(distance, duration) {
        this.distance = distance;
        this.duration = duration;
    }
}

class Running extends Workout {
    constructor(distance, duration, cadence) {
        super(distance, duration);
        this.cadence = cadence;
    }
}

const run = new Running(5, 30, 80);
console.log(run);