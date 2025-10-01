let country = "India";
let continent = "Asia";
let population = 14557750;
let finland =  6000000;
let averagePopulation = 3300000;
let description = `Portugal is in Europe, and its 11 million people speak portuguese`;

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof false);
// console.log(typeof javascriptIsFun);
// console.log(typeof 03)
// console.log(typeof 'String');

let isIsland = "Swaraj Dweep";
let language = "Marathi";
const birthYear = 1992;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

lastName  = "Khandagale";
console.log(lastName);


// Math operator
const now = 2025;
const ageKalpesh = now - 1992;
const ageKajal = now - 1996;
console.log(ageKalpesh + ',' + ageKajal, ageKajal / 10, 3 ** 3);
population++;
console.log(population < averagePopulation);


//Assignment operator 
let x = 10 + 5;
x += 10; // x = x + 10;
x *= 4; // x = x * 4;
x++;
x--;
x--;

console.log(x)

// Comparison operator
console.log(ageKalpesh < ageKajal);


let maskPerson = 50;
let heightPerson = 152;

let BMIPerson = maskPerson / (heightPerson * heightPerson);
console.log('Kalpesh BMI is - ' + BMIPerson);


// String and template literals

const firstName =  'Kalpesh';  
const job = 'Front End Developer';
// const birthYear = 1992;
const year = 2023;

const kalpesh = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

const kalpeshNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(kalpesh);
console.log(kalpeshNew);
console.log(`Just a regular string`);
console.log(
    'String with \n\
     multiple \n\
    lines'
);
console.log(`String with 
    multiple
    lines.
`)

console.log(description);

const age = 17

if (age >= 18) {
    console.log('Asmi can start driving license 🚘');
} else {
    const yearLeft = 18 - age;
    console.log(`Asmi is too young. Wait another ${yearLeft} years 🙂`);
}

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

if (population >= 3300000) {
    console.log('Portugal\'s population is above average');
} else {
    console.log('Portugal\'s population is 22 million below average');
}

// Type conversion 
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(String(23), 23);

// Type coercion
console.log('I am ' + 23 + ' years old');
console.log('10' + '5' + 2);

console.log( 5 + 6 + '4' + 9 - 4 - 2);


// Truhthy and falsy
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Kalpesh'));
console.log(Boolean({}));
console.log(Boolean(''));

let money = 1;
if (money) {
    console.log(`don't spend it all`);
} else {
    console.log(`You should get a job`);
}

let height = 123;

if (height) {
    console.log('YAY, Height is defined');
} else {
    console.log('Height is UNDEFINED');
}


// LECTURE: Equality Operators: == vs. ===

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }

// Switch case

const day = "Wednesday";

// switch (day) {
//     case 'Monday':
//         console.log('Plane follow the timetable.');
//         console.log('Go to the office on time');
//         break;
//     case 'Tuesday':
//     case 'Wednesday':
//         console.log('Plane follow the timetable.');
//         console.log('Start the project');
//         break;
//     case 'Thursday':
//         console.log('Plane follow the timetable.');
//         console.log('Restructure the code');
//         break;
//     case 'Friday':
//         console.log('Plane follow the timetable.');
//         console.log('Try to update on the Github');
//         break;
//     case 'Saturday':
//         console.log('Complete the Sleep');
//         console.log('Complete your personal work');
//         break;
//     case 'Sunday':
//         console.log('Go out for natural walk');
//         console.log('Take a body rest and enjoy with family');
//         break;
//     default:
//         console.log('Not a valid input');
// }



// if (day === 'Monday') {
//     console.log('Plane follow the timetable.');
//     console.log('Go to the office on time');
// } else if (day === 'Tuesday' || day === 'Wednesday') {
//     console.log('Plane follow the timetable.');
//     console.log('Start the project');
// } else if (day === "Thursday") {
//     console.log('Plane follow the timetable.');
//     console.log('Restructure the code');
// } else if (day === "Thursday") {
//     console.log('Plane follow the timetable.');
//     console.log('Restructure the code');
// } else if (day === "Friday") {
//     console.log('Plane follow the timetable.');
//     console.log('Try to update on the Github');
// } else if (day === "Saturday") {
//     console.log('Complete the Sleep');
//     console.log('Complete your personal work');
// } else if (day === "Sunday") {
//     console.log('Go out for natural walk');
//     console.log('Take a body rest and enjoy with family');
// } else {
//     console.log('Not a valid input');
// }



const personAge = 30;
personAge >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

let drink2;
if (personAge >= 18) {
    drink2 = "Wine 🍷";
} else {
    drink2 = "Water 💧";
}
console.log(drink2);

console.log(`I like to drink ${personAge >= 18 ? 'wine 🍷' : 'water 💧'}`);