'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className = '') {
    const html = `
        <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[Object.keys(data.languages)[0]]}</p>
            <p class="country__row"><span>💰</span>$${data.currencies[Object.keys(data.currencies)[0]].name}</p>
        </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

const renderError = function(msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
}

///////////////////////////////////////

// const getCountryAndNeighbour = function (country) {
//     // AJAX call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener('load', function(){
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         // Render country 1
//         renderCountry(data);

//         // Get neighbouring country
//         const neighbour = data.borders?.[0];

//         if (!neighbour) return;

//         // AJAX call country 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//         request2.send();

//         request2.addEventListener('load', function(){
//             const [data2] = JSON.parse(this.responseText);
//             console.log(data2);

//             renderCountry(data2, 'neighbour');
//         });
//     });
// }

// getCountryAndNeighbour('bharat');


// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// const getCountryData = function(country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function(response) {
//         console.log(response);
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//         renderCountry(data[0]);
//     })
// }

// getCountryData('uae');

const getJSON = function(url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
            if(!response.ok)
            throw new Error(`${errorMsg} ${response.status}`);

            return response.json();
    });
};

// const getCountryData = function(country) {
//     // Country 1
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//         console.log(response);
//     })
//     .then(data => {
//         renderCountry(data[0]);
//         const neighbour = data[0].borders?.[0];

//         if (!neighbour) return;

//         // Country 2
//         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(error => {
//         console.error(`${error} 💥`);
//         renderError(`Something went wrong 💥💥 ${error.message}. Try again!`);
//     })
//     .finally(() => {
//         countriesContainer.style.opacity = 1;
//     })
// };

// const getCountryData = function(country) {
//     // Country 1
//     getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//         renderCountry(data[0]);
//         const neighbour = data[0].borders?.[0];
//         console.log(neighbour);

//         if (!neighbour) throw new Error('No neighbour found!');

//         // Country 2
//         return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Country not found');
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(error => {
//         console.error(`${error} 💥`);
//         renderError(`Something went wrong 💥💥 ${error.message}. Try again!`);
//     })
//     .finally(() => {
//         countriesContainer.style.opacity = 1;
//     })
// };

// // getCountryData('bharat');

// btn.addEventListener('click', function() {
//     getCountryData('bharat');
// });

// getCountryData('australia');


// const whereAmI = function(lat, lng) {
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//         if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//         console.log(res);
//         return res.json()})
//     .then(data => {
//         console.log(data);
//         console.log(`You are in ${data.city}, ${data.country}`);

//         return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
//     })
//     .then(res => {
//         if (!res.ok) throw new Error(`Country not found ${res.status})`)
//         return res.json()
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥`));
// }

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// console.log('Test end');

// const lotteryPromise = new Promise(function(resolve, reject) {
//     console.log('Lotter draw is happening 🔮');
//     setTimeout(function() {
//         if(Math.random() >= 0.5) {
//             resolve('You WIN 💰');
//         } else {
//             reject(new Error('You lost your money 💩'));
//         }
//     }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err)); 

// Promisifying setTimeout
// const wait = function(seconds) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, seconds * 1000);
//     })
// };

// wait(1)
//     .then(()=> {
//         console.log('1 second passed');
//         return wait(1);
//     })
//     .then(()=> {
//         console.log('2 second passed');
//         return wait(1);
//     })
//     .then(()=> {
//         console.log('3 second passed');
//         return wait(1);
//     })
//     .then(() => console.log('4 second passed'))


    // Challenge 2
    const imgContainer = document.querySelector('.images');

    const createImage = function(imgPath) {
        return new Promise(function(resolve, reject) {
            const img = document.createElement('img');
            img.src = imgPath;

            img.addEventListener('load', function() {
                imgContainer.append(img);
                resolve(img);
            });

            img.addEventListener('error', function() {
                reject(new Error('Image not found'));
            })
        })
    }

    // let currentImg;

    // createImage('img/img-1.jpg')
    // .then(img => {
    //     currentImg = img;
    //     console.log('Image 1 loaded');
    //     return wait(2);
    // })
    // .then(() => {
    //     currentImg.style.display = 'none';
    //     return createImage('img/img-2.jpg');
    // })
    // .then(img => {
    //     currentImg = img;
    //     console.log('Image 2 loaded');
    //     return wait(2);
    // })
    // .then(() => {
    //     currentImg.style.display = 'none';
    // })
    // .catch(err => console.error(err));

    // const loadPause = async function() {
    //     try {
    //         // Load image 1
    //         let img = await createImage('img/img-1.jpg');
    //         console.log('Image 1 loaded');
    //         await wait(2);
    //         img.style.display = 'none';

    //         // Load image 2
    //         img = await createImage('img/img-2.jpg');
    //         console.log('Image 2 loaded');
    //         await wait(2);
    //         img.style.display = 'none';
    //     } catch(err) {
    //         console.error(err);
    //     }
    // }

    // loadPause();

    // Part 2
    // const loadAll = async function(imgArr) {
    //     try {   
    //         const imgs = imgArr.map(async img => await createImage(img));
    //         createImage(img);
    //         const imgsEl = await Promise.all(imgs);
    //         console.log(imgsEl);
    //         imgsEl.forEach(img => img.classList.add('parallel'));
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    // loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);


 
// const getPosition = function() {
//     return new Promise(function (resolve, reject) {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     })
// }

// const whereAmI = async function() {
//     try {// Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     const dataGeo = await     resGeo.json();
//     if(!resGeo.ok) throw new Error('Problem getting location data');
//     console.log(dataGeo);

//     // Country data
//     const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
//     const data = await res.json();
//     console.log(data);
//     renderCountry(data[0]);} catch (err) {
//         console.error(`${err} 💥`);
//         renderError(`Something went wrong 💥 ${err.message}`);
//     }
// }

// console.log('1: Will get location');
// whereAmI();
// console.log('2: Finished getting location');


// const get3Countries = async function(c1, c2, c3) {
//     try {
//        const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//        const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//        const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

//        console.log([data1.capital, data2.capital, data3.capital]);
//     } catch(err) {
//         console.error(err);
//     }
// }

// get3Countries('portugal', 'canada', 'tanania');
console.log('Test start');

// function delayMessage() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Hello Kalpesh');
//         }, 2000);
//     })
// }

// delayMessage().then((msg) => console.log(msg));

// 🧠 Practice 1
// setTimeout(() => {
//     console.log("Hello Kalpesh");
// }, 2000);

// 🧠 Practice 2
// function showMessage() {
//     setTimeout(() => {
//         console.log("Hello Kalpesh");
//     }, 2000);
// }

// showMessage();

// 🧠 Practice 3

// function dealyMessage() {
//     return new Promise((resolve) => {
//         resolve("Hello Kalpesh");
//     })
// }

// dealyMessage().then((msg) => console.log(msg));

// 🧠 Practice 4
function dealyMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Kalpesh");
        }, 2000);
    })
}

dealyMessage().then((msg) => console.log(msg));