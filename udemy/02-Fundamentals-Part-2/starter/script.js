"use strict";

// let hasDriversLicense = false;
// let passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) {
//     console.log('I can drive :D');
// }

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces =  cutFruitPieces(apples);
//     const orangePieces =  cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(5,15));

// function calcAge(birthYear) {
//     return 2025 - birthYear;
// }

// const calcAge2 = birthYear => 2025 - birthYear;

// // const age2 = calcAge2(1965);

// console.log(age2);

// const age = birthYear => 60 - birthYear;

// console.log(ageRetiredYearCalc(32));

// const calcAverage = (a,b,c) => {
//     const averageScore = (a + b + c) / 3;
//     return averageScore;
// }

// const scoreDolphins = calcAverage(5,10,15);
// const scoreKoalas = calcAverage(20,25,30);

// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas ) {
//         console.log(`Dolphins win 🏆`);
//     }
// }

const friends = ['Pradeep', 'Vilas', 'Sunil'];

// // Add element
// console.log(friends)
// friends.unshift('Nayan');
// console.log(friends)

// // remove element
// friends.pop(); //Last
// friends.pop(); //Last
// console.log(friends);
// friends.shift('Tejas');
// console.log(friends);

// console.log(friends.indexOf('Pradeep'));
// console.log(friends.indexOf('Y'));

// console.log(friends.includes('Pradeep'));
// console.log(friends.includes('Y'));

// if (friends.includes('pbl')) {
//     console.log('You are new friend Pradeep');
// } else {
//     console.log('You have no friends');
// }

// calBill and Tips exercise

// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125,555,44,69,889,325];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// // const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(tips);
// console.log(totals);

const jonas = {
    firstName: 'Jonas',
    lastName: 'China',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michel', 'Peter', 'Steven'],
    hasDrivingLicense: true,
    calcAge: function (birthYeah) {
        this.age = 2037 - this.birthYeah;
        return this.age;
    },

    getSummery: function() {
       return `${this.firstName} is a ${this.calcAge()}-old ${this.job}, and he has ${this.hasDrivingLicense ? 'a': 'an'} drivers license`;
    }
}

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.getSummery());
// console.log(jonas['friends']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// const shisheer = {
//     fullName: 'Shisheer Sir',
//     mass: 54.6,
//     height: 1.61,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// }

// shisheer.calcBMI();
// console.log(shisheer.bmi);

const kalpesh = [
  "Kalpesh",
  "China",
  2037 - 1991,
  "teacher",
  ["Michel", "Peter", "Steven"],
  true,
];

// const types = [];
// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < kalpesh.length; i++) {
//     console.log(kalpesh[i]);
//     types.push(typeof(kalpesh[i]));
// }
// // console.log(types);

// for (let i = 0; i < years.length; i++) {
//     ages.push(2040 - years[i])
// }
// console.log(types);
// console.log(ages);

// continue and break
// console.log('---- ONLY STRING ----');

// for (let i = 0; i < kalpesh.length; i++) {
//     if (typeof kalpesh[i] !== 'string') continue
//     console.log(kalpesh[i]);
// }

// // continue and break
// console.log('----  BREAK WITH NUMBER ----');

// for (let i = 0; i < kalpesh.length; i++) {
//     if (typeof kalpesh[i] === 'number') break
//     console.log(kalpesh[i]);
// }

// Looping backwards
// for (let i = kalpesh.length - 1; i >= 0; i--)  {
//     console.log(i, kalpesh[i]);
// }

// Loops in loops

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`------- Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise} Lifting weight repetition ${rep} 🏋🏻‍♀️`);
//     }
// }

// let rep = 1;

// while (rep <= 10) {
//     console.log(`WHILE: Lifting weights repetition & ${rep} 🏋🏻‍♀️`);
//     rep++;
// }
