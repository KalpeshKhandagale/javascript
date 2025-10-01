'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {

//     // ES5
//     // numPassengers ||= 1;
//     // price ||= 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     };
//     console.log(booking)
//     bookings.push(booking);
// }
// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined ,1000);

// const flight = 'LH234';
// const jonas = {
//     name: 'Kalpesh Khandagale',
//     passport: 2456789312
// }

// const checkIn = function(flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if(passenger.passport === 2456789312) {
//         alert('Checked In');
//     } else {
//         alert('Wrong Password');
//     }
// }

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 100000000);
// }

// newPassport(jonas);
// checkIn(flight, jonas);

// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// // Higher-order function
// const transformer = function(str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// const high5 = function() {
//     console.log('✋🏻');
// }

// document.body.addEventListener('click', high5);

// ['a','b','c'].forEach(high5);


// const greet = greeting =>  name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hi')('Khandagale');

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    }
}

// book method

lufthansa.book(239, 'Kalpesh Khandagale');
lufthansa.book(635, 'Pradeep Kadam');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book;
// Does not work
// book(23, 'Sunil Mozar');

book.call(eurowings, 23, 'Sunil Mozar');
console.log(eurowings);

book.call(lufthansa, 239, 'Kajal Khandagale');
console.log(lufthansa);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(eurowings, flightData);
console.log(eurowings);

book.call(lufthansa, ...flightData);

// Bind method
const bookEW = book.bind(eurowings);
bookEW(12, 'Kasturi Khandagale');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas');
bookEW23('Martha');

// with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
}

lufthansa.buyPlane();
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + (value * rate);
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

// Challenge
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: Javascript', '1: Python', '3: Rust', '4: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        // Get the answer
        const answer = Number(
            prompt(
                `${this.question}\n${this.options.join('\n')}\n(Write option number)`
            )
        );

        console.log(answer);

        // Register answer
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

        console.log(this.answers);
    }
}

// poll.registerNewAnswer();
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

const runOnce = function () {
    console.log('This will never run again');
}
runOnce();

// IIFE
(function () {
    console.log('This will never run again');
    const isPrivate = 23;
})();



(() => console.log('This will ALSO never run again'))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);

const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passenger`);
    }
} 

const booker = secureBooking(); 

booker();
booker();
booker();