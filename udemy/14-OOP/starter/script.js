'use strict';

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);  

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
} 

StudentProto.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods

class Account {
    locale = navigator.language; // public field
    bank = 'JS Bank'; // public field
    #movements = []; // private field
    #pin; // private field

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;

        // this.movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // public interface (API)
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
    }

    withdraw(val) {
        this.deposit(-val);
    }

    approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this.approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }
}

const acc1 = new Account('Jonas', 'EUR', 111);
// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1);
console.log(acc1.pin);