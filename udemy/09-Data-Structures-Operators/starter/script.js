'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };

  const tip = {
      'waiter': 100
  }
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   ES6 enhanced object literals
  openingHours,
  tip,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
      starterIndex = 1,
      mainIndex = 0,
      time = '20:00',
      address,
    }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },


  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

console.log('--------- KALPESH IS PRACTICING ---------');

const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pizza'
]);

console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Garlic'));
ordersSet.add('Bread');
ordersSet.add('Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);


// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set('KalpeshGautamKhandagale').size);


// New Operations to Make Sets Useful!
const italianFoods = new Set([
    'pasta',
    'gnocchi',
    'tomatoes',
    'olive oil',
    'garlic',
    'basil'
]);

const mexicanFoods = new Set([
    'tortillas',
    'beans',
    'rice',
    'tomatoes',
    'avocado',
    'garlic'
]);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', commonFoods);
console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('union:', italianMexicanFusion);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference italian', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference mexican', uniqueMexicanFoods);

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days `
for (const day of properties) {
    openStr += `${day}, `
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entries object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// Optional chaining?.
// if (restaurant.openingHours && restaurant.openingHours.mon) console.log
// (restaurant.openingHours.mon.open);

// WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days ) {
//     const open = restaurant.openingHours[day]?.open ?? 'Closed';
//     console.log(`On ${day}, we open at ${open}`);
// }

// Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exits.') 
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exits.') 

// Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io'}];
// console.log(users);
// const users = [];
// console.log(users[0]?.name ?? 'User array empty');
// if (users.length > 0) {
//     console.log(users[0].name);
// }  else {
//     console.log('User array empty');
// } 


////////////////////////////////////
// Rest operator

// SPREAD, because on LEFT side of =
const arr = [1,2, ...[3,4]];
console.log(arr);
// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, ,risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu
];
console.log(pizza, risotto, otherFood);

// 1) Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    console.log(sum);
}

add(2, 5);
add(5, 3, 5, 3, 2, 1, 4);
add(8, 2, 3, 7, 8, 6, 4, 2, 8);

const x = [5, 3, 10];
add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spanish');


console.log('------OR------');
console.log('Jonas' || 10);
console.log(10 || 'Jonas');
console.log(undefined || null);
console.log(null || undefined);
console.log(undefined || null || 'Jonas' || 10);

// restaurant.numGuest = 23;
// const guest1 = restaurant.numGuest ? restaurant.numGuest : 15;
// console.log(guest1);

// const guest2 = restaurant.numGuest || 10;
// console.log(guest2);

console.log('------AND------');
console.log('Jonas' && 10);
console.log(10 && 'Jonas');
console.log(undefined && null);
console.log(null && undefined);
console.log('Jonas' && 10 && null && undefined);

if (restaurant.orderPizza) {
    restaurant.orderPizza('Toffins', 'spanish');
}

// The Nullish Coalescing Operator (??)
restaurant.numGuest = 0;
const guests = restaurant.numGuest || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);

const rest1 = {
    name: 'Capri',
    // numGuest: 20
    numGuest: 0
}

const rest2 = {
    name: 'La Piazza',
    owner: 'kalpesh'
}

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// nullish assigenment operator
console.log('PRACTICE');
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>'


console.log(rest1);
console.log(rest2);


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);
// for (const [i, el] of menu.entries()) {
//     console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

////////////////////////////////////
// Spread operator (...)
// const arr = [7,8,9];
// const badNewArr = [1,2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Idali'];
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Real world example
// const ingredients = [
//     // prompt("Let's make pasta ingredient 1?"),
//     // prompt('ingredient 2'),
//     // prompt('ingredient 3')
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Kalpesh'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = "Naivaidya";
// console.log(restaurantCopy.name); 
// console.log(restaurant.name); 

//////////////////////////////////////
// Destructuring

// restaurant.orderDelivery({
//     time: '23:30',
//     address: 'Janta seva',
//     mainIndex: 2,
//     starterIndex: 2,
// })

// restaurant.orderDelivery({
// })

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const {menu = [], starterMenu: starters = []} = restaurant;  
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;

// const obj = {a: 23, b: 7, c: 14};
// ({a,b} = obj);
// console.log(a, b);

// // Nested objects
// const { fri: { open : o , close: c } } = openingHours;
// console.log(o, c);

// Destructuring Arrays 
// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2,0);
// console.log(starter, mainCourse);

// // Nested destructuring 
// const nested = [2, 4, [5, 6]];
// // const [i, ,j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values This use for API
const [p,q=50,r=10] = [8, 9];
console.log(p,q,r);

//////////////////////////////////////
// Destructuring self practice 
const farm = {
    owner: 'Gautam Khandagale',
    cultivate_man: 'Bapurav Ghorpade',
    locations: ['Shivthar','Vanghal'],
    acres: ['1.60','0.20'],
    fields: ['Sugarcain', 'Soyabin'],
    gatNumber: ['511/1/2', '310/1'],

    info: function(locationIndex, fieldsIndex) {
        return [this.locations[locationIndex], this.fields[fieldsIndex]];
    },

    farmingInfo: function({name = 'Kalpesh', fieldIndex = 0, address}) {
        console.log(`The main farmer is ${name} and he is farming ${this.fields[fieldIndex]} at location ${address}`);
    },

    farmKhand: function({name, surname, location, acres}) {
        console.log(`We are giving this ${this.locations[location]} ${this.acres[acres]} to ${name} ${surname}`);
    },

    talathiOffice: {
        mon: {
            open: 10,
            close: 6
        },
        tues: {
            open: 10,
            close:3
        },
        wed: {
            open: 10,
            close: 1
        }
    }
}

// option object
farm.farmKhand({
    name: 'Gopi',
    surname: 'Mozar',
    location: 1,
    acres: 1
});

// farm.farmKhand({
//     name: 'Sunil',
//     surname: 'Mozar',
//     location: 0,
//     acres: 0
// });

// Option object
// farm.farmingInfo({
//     name: 'Gautam',
//     fieldIndex : 1,
//     address: 'Shivthar'
// });

// farm.farmingInfo({
//     address: 'Vanghal'
// });

// destructuring object
// const {owner, locations, acres} = farm;
// console.log(owner, locations, acres);

// const { 
//         owner: name,
//         locations: loc,
//         acres: acr
//     } = farm;

//     console.log(name, loc, acr);

// Default values
// const {fields: field = [] } = farm;
// console.log(field);

// Mutating variables
// let a = 10;
// let b = 20;

// const obj = {a: 25, b: 50, c:80};
// ({a,b} = obj);
// console.log(a, b);

// Nested objects
// const {tues : {open: o, close: c}} = farm.talathiOffice;
// console.log(o, c);

// destructuring array
// const x = [2,5,6];
// const [a,b,c] = x;
// console.log(a,b,c);

// const [main,secondary] = farm.fields;
// const name = farm;
// console.log(main, secondary);
// console.log(name.cultivate_man);

// Received 2 values form the function
// const [locationMain, fieldMain] = farm.info(0,1);
// console.log(locationMain, fieldMain);

// // Nested destructuring
// const nested = [32, 28, [3,28]];
// const [i , , [j,k]] = nested;
// console.log(i,j,k);

// // Default value
// const [t=15,m=20,c=10] = [0,2];
// console.log(t,m,c);


// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log('---------- KALPESH IS PRACTICING ----------');
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const passenger = 'jOnAS'; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);


// // replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}


// Practice exercise
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
  
    if (baggage.includes('knife') || baggage.includes('gun')) {
      console.log('You are NOT allowed on board');
    } else {
      console.log('Welcome aboard!');
    }
  };

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');


///////////////////////////////////////
// Working With Strings - Part 2

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
    const names = name.split(' ');
    const namesUpper = [];
  
    for (const n of names) {
      // namesUpper.push(n[0].toUpperCase() + n.slice(1));
      namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
};
  
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');


// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

console.log('Kalpesh'.padStart(20, '0').padEnd(50, '+'));

const maskCreditCard = function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
  };
  
  console.log(maskCreditCard(64637836));
  console.log(maskCreditCard(43378463864647384));
  console.log(maskCreditCard('334859493847755774747'));


// Repeat
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(10));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);