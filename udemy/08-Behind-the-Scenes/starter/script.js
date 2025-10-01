'use strict';
function calcAge(birthYear) {
    const age = 2025 - birthYear;
    
    function printAge() {
        let output = `${firstName}, you are ${age} born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millennial = true;

            // Creating a NEW variable with same name as outer scope's variable
            const firstName = 'Steven';

            // Reassiging outer scope's variable
            output = 'NEW OUTPUT';


            const str = `Oh, you are millennial, ${firstName}`
            console.log(str);

            function add(a, b) {
                return a + b;
            }

        }
        console.log(millennial);
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'Kalpesh';
calcAge(1992);


var x = 1;
let y = 2;
const z = 3;

console.log(this);



const jessica1 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age:27
};

function marryPerson(originalPerson, newLastName) {
    originalPerson.lastName = newLastName;
    return originalPerson;
}

const marriedJessica = marryPerson(jessica1, 'Davis');

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis'

console.log('Before:', jessica1);
console.log('After:', marriedJessica);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age:27,
    family: ['Alice', 'Bob']
};

// Shallow copy
// const jessicaCopy = {...jessica}; // Spread Operator 
// jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before:', jessica);
// console.log('After:', jessicaCopy);

// Deep copy/clone 
const jessicaClone = structuredClone(jessica);

jessicaClone.family.push('Mary');
jessicaClone.family.push('John');

console.log('Original:', jessica);
console.log('Clone:', jessicaClone);


