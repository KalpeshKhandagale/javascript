'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ]
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard'
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'standard'
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic'
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const formatMovements = function(date) {
    const calcDaysPassed = (date1, date2) => 
        Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

    const daysPassed = calcDaysPassed(new Date(), date);
    console.log(daysPassed);

    if (daysPassed === 0) return 'Today';
    if (daysPassed === 1) return 'Yesterday';
    if (daysPassed <= 7) return `${daysPassed} days ago`;
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

const displayMovements = function(acc, sort = false) {
    containerMovements.innerHTML = '';

   const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

   movs.forEach(function (mov, i){
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const date = new Date(acc.movementsDates[i]);
        const displayDate = formatMovements(date);

        const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${mov} €</div>
        </div>`

        containerMovements.insertAdjacentHTML('afterbegin', html);
   });   
};
// displayMovements(account1.movements);

const calDisplayBalance = function(acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance} €`;
};

// calDisplayBalance(account1.movements);

const calcDisplaySummary = function(acc) {
    const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);
    labelSumIn.textContent = `${incomes} €`;

    const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, curr) => acc + curr, 0);
    labelSumOut.textContent = `${Math.abs(out)} €`;

    const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest} €`   
}

// calcDisplaySummary(account1.movements);

const createUsernames = function (accs) {
    accs.forEach(function (acc){
        acc.username = acc.owner
        .split(' ')
        .map(name => name[0])
        .join('');
    });        
}

createUsernames(accounts);

const updateUI = function(acc) {
    // Display movements
    displayMovements(acc);

    // Display Balance
    calDisplayBalance(acc);

    // Display Summery
    calcDisplaySummary(acc);
}

let currentAccount;

// FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function(e) {
    // Prevent form submitting
    e.preventDefault();

    currentAccount = accounts.find(acc => acc.username ===  inputLoginUsername.value.toUpperCase());
    // console.log(currentAccount);

    if(currentAccount?.pin === Number(inputLoginPin.value)) {
        // Display UI and message
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;

        // Create current date and time
        const now = new Date();
        const day = now.getDate();
        const month = `${now.getMonth() + 1}`.padStart(2, 0);
        const year = now.getFullYear();
        const hour = now.getHours();
        const min = now.getMinutes();
        labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

        // clear the input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        // Update UI
        updateUI(currentAccount);
    }
});

btnTransfer.addEventListener('click', function(e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value.toUpperCase());

    inputTransferAmount.value = inputTransferTo.value = '';

    if (
        amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount &&
        receiverAcc?.username !== currentAccount.username
    ) { 
        // console.log('Transfer valid');
        // Doing the transfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        // Add transfer date
        currentAccount.movementsDates.push(new Date().toISOString());
        receiverAcc.movementsDates.push(new Date().toISOString());

        // Update UI
        updateUI(currentAccount);
    }
});

btnLoan.addEventListener('click', function(e){
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        // Add movements
        currentAccount.movements.push(amount);

        // Add loan date
        currentAccount.movementsDates.push(new Date().toISOString());

        // Update UI
        updateUI(currentAccount);
    }
    inputLoanAmount.value = '';
})

btnClose.addEventListener('click', function(e){
    e.preventDefault();
    
    if (
        inputCloseUsername.value === currentAccount.username &&
         Number(inputClosePin.value) === currentAccount.pin
    ) {
            const index = accounts.findIndex(acc => acc.username === currentAccount.username);
            console.log(index);

            // Delete account
            accounts.splice(index, 1);

            // Hide UI
            containerApp.style.opacity = 0;
    }

    inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function(e){
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});

// Challenges
// const checkDogs = function(dogsJulia, dogsKate) {
//     const dogsJulliaCorrected = dogsJulia.slice();
//     dogsJulliaCorrected.splice(0, 1);
//     dogsJulliaCorrected.splice(-2); 

//     const dogs = dogsJulliaCorrected.concat(dogsKate);
//     console.log(dogs);

//     // For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")

//     dogs.forEach(function(dog, i) {
//         if(dog >= 3) {
//             console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`)
//         } else {
//             console.log(`Dog number ${i+1} is still a puppy 🐶`)
//         }
//     });

// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// const calcAverageHumanAge = ages => 
//     ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4 ))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);


// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(avg1, avg2);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES






/////////////////////////////////////////////////

// let arr = ['a','b','c','d','e'];

// SLICE
// console.log('----- SLICE -----');
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE
// console.log('----- SPLICE -----');
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1,2);
// console.log(arr);

// // REVERSE
// console.log('----- REVERSE -----');
// arr = ['a','b','c','d','e'];
// const arr2 = ['j','i','h','g','f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// console.log('----- CONCAT -----');
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // CONCAT
// console.log('----- JOIN -----');
// console.log(letters.join(' - '));

// const arry = [23, 11, 64];
// console.log(arry[0]);
// console.log(arry.at(1));

// // getting last array element
// console.log(arry[arry.length - 1]);
// console.log(arry.slice(-1)[0]);
// console.log(arry.at(-1));

// console.log('Kalpesh'.at(-1));


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//     if (movement > 0) {
//         console.log(`Movement ${i + 1} : You deposited ${movement}`);
//     } else {
//         console.log(`Movement ${i + 1} : You withdrew ${Math.abs(movement)}`);
//     }
// }

// console.log('------ FOREACH ------;');
// movements.forEach(function (mov, i, arr) {
//     if (mov > 0) {
//         console.log(`Movement ${i + 1} : You deposited ${mov}`);
//     } else {
//         console.log(`Movement ${i + 1} : You withdrew ${Math.abs(mov)}`);
//     }
// });

// Map
// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
//   ]);

// currencies.forEach(function (value, key, map) {
//     console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, map) {
//     console.log(`${key}: ${value}`);
// });

// const euroToUsd = 1.1;

// const movementsUSD =  movements.map(mov =>  mov * euroToUsd);

// console.log(movements);
// console.log(movementsUSD);


// const movementsDescription = movements.map((mov, i) => 
//      `Movement ${i + 1} : You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
// );

// console.log(movementsDescription);

// const deposits = movements.filter(function (mov) {
//     return mov > 0;
// });

// console.log(movements);
// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);

// console.log(movements);
// console.log(withdrawals);

// console.log(movements);

// const balance = movements.reduce((acc, cur) => acc + cur);

// console.log(balance);

// // PIPELINE
// const euroToUsd = 1.1;
// const totalDepositUSD = movements.filter(mov => mov > 0).map(mov => mov * euroToUsd).reduce((acc, curr) => acc + curr, 0);
// console.log(parseInt(totalDepositUSD));


// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// console.log(movements);

// const lastWithdrawal = movements.findLast(mov => mov < 0);
// console.log(lastWithdrawal);

// console.log(movements.includes(-130));

// SOME: CONDITION

// const anyDeposit = movements.some(mov => mov > 3000);
// console.log(anyDeposit);

// EVERY
// console.log(movements.every(move => move > 0));
// console.log(account4.movements.every(move => move > 0));

// const arr = [[1,2,3], [4,5,6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1,2], 3], [4, [5,6]], 7, 8];
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// Flat
// const overallBalance = accounts
//     .map(acc => acc.movements)
//     .flat()
//     .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// // FlatMap
// const overallBalance2 = accounts
//     .flatMap(acc => acc.movements)
//     .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance2);


// const breeds = [
//     {
//         breed: 'German Shepherd',
//         averageWeight:32,
//         activities: ['fetch', 'swimming'],
//     },
//     {
//         breed: 'Dalmatian',
//         averageWeight:24,
//         activities: ['running', 'fetch', 'agility'],
//     },
//     {
//         breed: 'Labrador',
//         averageWeight:28,
//         activities: ['swimming', 'fetch'],
//     },
//     {
//         breed: 'Beagle',
//         averageWeight:12,
//         activities: ['digging', 'fetch'],
//     },
//     {
//         breed: 'Husky',
//         averageWeight:26,
//         activities: ['running', 'agility', 'swimming'],
//     },
//     {
//         breed: 'Bulldog',
//         averageWeight:36,
//         activities: ['sleeping'],
//     },
//     {
//         breed: 'Poodle',
//         averageWeight:18,
//         activities: ['agility', 'fetch'],
//     }
// ]

// // 1.
// const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;
// console.log(huskyWeight);

// // 2.
// const dogBothActivities = 
// breeds.find(breed => breed.activities.includes('fetch') && breed.activities.includes('running')).breed;
// console.log(dogBothActivities);

// // 3.
// const allActivities = breeds.flatMap(breed => breed.activities);
// console.log(allActivities);

// // 4.
// const uniqueActivities = [...new Set(allActivities)];
// console.log(uniqueActivities);

// // 5.
// const swimmingAdjacent = [...new Set(breeds
//                             .filter(breed => breed.activities.includes('swimming'))
//                             .flatMap(breed => breed.activities))];

// console.log(swimmingAdjacent);

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);
// console.log(movements.sort());

movements.sort((a,b) => a - b);
console.log(movements);

movements.sort((a,b) => b - a);
console.log(movements);

console.log(movements);

const groupedMovements = Object.groupBy(movements, movement => movement > 0 ? 'deposits' : 'withdrawals');
console.log(groupedMovements);

const groupByActivity = Object.groupBy(accounts, account => {
    const movementCount = account.movements.length;

    if (movementCount >= 8) return 'very active';
    if (movementCount >= 4) return 'active';
    if (movementCount >= 1) return 'moderate'
    return 'inactive'; 
});

console.log(groupByActivity);

// const groupedAccounts = Object.groupBy(accounts, account => account.type);
// console.log(groupedAccounts);

const groupedAccounts = Object.groupBy(accounts, ({type}) => type);
console.log(groupedAccounts);

const arr = [1,2,3,4,5,6,7];
console.log(new Array(1,2,3,4,5,6,7));

// Empty array + fill method
const x = new Array(7);
console.log(x);

x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);


labelBalance.addEventListener('click', () => {
    const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
    console.log(movementsUI.map(el => el.textContent.replace('€', '')));  
})

console.log(movements);
const reverseMov = movements.toReversed();
console.log(reverseMov);

// toSorted sort, toSpliced (splice)
movements[1] = 2000;
console.log(movements);

// Array Methods Practice
// 1.
const bankDepositSum = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 0)
    .reduce((sum, acc) => sum + acc, 0); 
console.log(bankDepositSum);

// 2.
const numDeposits1000 = accounts.flatMap(acc => acc.movements)
                                .filter(mov => mov >= 1000).length;
                                console.log(numDeposits1000);


// 4.

// this is the nice title -> Ths Is a Nice Title
const convertTitleCase = function (title) {
    const capitalize = str => str[0].toUpperCase() + str.slice(1);

    const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
    const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => exceptions.includes(word) ? word : capitalize(word))
    .join(' ');
    return capitalize(titleCase);
}

console.log(convertTitleCase('this is the nice title'));
console.log(convertTitleCase('this is the LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));


const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John','Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => dog.recFood = Math.floor(dog.weight ** 0.75 * 28));
console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(`Sarah's dog eats too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`);

// 3.
const ownersTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
console.log(ownersTooMuch);

const ownersTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
console.log(ownersTooLittle);

// 4.
console.log(`${ownersTooMuch.join(', ')}'s dogs are eating too much`);
console.log(`${ownersTooLittle.join(', ')}'s dogs are eating too little`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));


// 8.
const dogsGroupByPortion = Object.groupBy(dogs, dog => {
    if (dog.curFood > dog.recFood) {
        return 'too-much';
    } else if (dog.curFood < dog.recFood) {
        return 'too-little';
    } else {
        return 'exact';
    }
})  

console.log(dogsGroupByPortion);

// 9.
const dogsGroupByOwners = Object.groupBy(dogs, dog => `${dog.owners.length}--owners`);
console.log(dogsGroupByOwners);

// 10.
const dogsSorted = dogs.toSorted((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);

labelBalance.addEventListener('click', function() {
    document.querySelectorAll('.movements__row').forEach(function (row, i) {
        console.log(i, '-', row);
        if (i % 2 === 0) row.style.backgroundColor = "orange"
    });
})