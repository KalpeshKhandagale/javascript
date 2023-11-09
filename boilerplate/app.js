// sayHello()
// // const sayHello = function() {
// //     console.log('this is declared with a function expression')
// // }


// function sayHello() {
//     console.log('hoisting')
// }

// // normal function
// const normalFunction = function (arg1, arg2) {
    
// }

// // arrow function
// const arrowFunction = (arg1, arg2) => {

// }

// const zeroArgs = () => {}
// const zeroWithUnderscore = _ => {
//     console.log('This function is without Argument!');
// }

// zeroWithUnderscore();

// const oneArg = arg1 => {}
// const oneArgWithParenthesis = (arg1) => {}


// // 3 line of code with normal function
// const sumNormal = function (num1, num2) {
//     return num1 + num2
// }

// can be replaced with one line of code
// const sumArrow = (num1, num2) => num1 + num2
// console.log(sumArrow(31,3))


// const ten = _ =>  {return 10}
// console.log(ten())

// const logger = log => log

// console.log(logger(25));

// const add = (num3, num4) => num3 + num4
// console.log(add(3,4))

// const multiply = (num5, num6) => num5 * num6
// console.log(multiply(31,3))

// const anObject = {
//     string : 'yay',
//     number : 1,
//     boolean : true,
//     anObject : {},
//     anFunction : function(name){
//          console.log('Hi '+ name + '!');
//     },
//     arArray : []
// }

// anObject.anFunction('This Method!');



// const james = 22
// const valerie = 25
// const kenneth = 27
// const kalpesh = 29

// if(kalpesh < james){
//     console.log('Kalpesh is younger than James.');
// }else if (kalpesh > valerie) {
//     console.log('Kalpesh is older than valerie.');
// }else if(kalpesh === kenneth){
//     console.log('Kalpesh is old as kenneth.');
// }else {
//     console.log('non of condition are satisfied.');
// }


// const zell = {isHavingFun : true}
// const vincy = zell

// console.log(zell === vincy)

// const someValue = 22

// if(someValue === {}){
//     console.log('true');
// }else {
//     console.log('false');
// }

// const str = ''

// if(!str){
//     console.log(true)
// }

// let a 
// console.log(a)

// const returnsNothing = () => {}
// console.log(returnsNothing())

// console.log(null === undefined)

// console.log(window.document)

// // const p = document.querySelector('p')
// // p.classList.remove('red')


// // if(p.classList.contains('super-power')){
// //     p.classList.remove('super-power')
// // }else {
// //     p.classList.add('super-power')
// // }

// const classAdd = document.getElementsByClassName('add')[0]
// classAdd.classList.add('red')

// const classRemove = document.getElementsByClassName('remove')[0]
// classRemove.classList.remove('remove')

// const containsOne = document.getElementsByClassName('contains1')[0]
// if(containsOne.classList.contains('blue')){
//     containsOne.classList.remove('blue')
// }else{
//     containsOne.classList.add('blue')
// }



// const containsTwo = document.getElementsByClassName('contains2')[0]
// if(containsTwo.classList.contains('blue')){
//     containsTwo.classList.remove('blue')
// }else{
//     containsTwo.classList.add('blue')
// }


// const toggleClass = document.getElementsByClassName('toggle')[0]

// if(toggleClass.classList.contains('red')){
//     toggleClass.classList.remove('red')
// }else {
//     toggleClass.classList.add('red')
// }



// const agency = "WebChutney"

// switch (agency) {
//     case 'TheGlitch':
//         document.write('Glitch is located at Andheri West.');
//         break;
    
//     case 'WebChutney':
//         document.write('WebChutney is located at Lower Parel.');
//         break;
    
//     case 'Brandmovers':
//         document.write('Brandmovers is located at Andheri East.');
//         break;

//     default:
//         document.write('Agency are great!!');
// }


// let x = 1

// while (x<=10) {
//     document.write(x + " Apple I have eat. <br/>")
//     x++;
// }

// const starWars = document.querySelector('#star-wars-characters')
// const luke = starWars.querySelector('.luke')
// console.log(luke.innerHTML)
// const yoda = starWars.querySelector('[data-type="master"]')
// console.log(yoda.innerHTML)
// const darth = starWars.querySelector('.badboy')
// console.log(darth.innerText)

// const button = document.querySelector('button')

// button.addEventListener('click', _ => {
//     const body = document.body

//     // if(button.classList.contains('is-clicked')){
//     //     body.classList.remove('button-is-clicked')
//     //     button.classList.remove('is-clicked')
//     // }else {
//     //     body.classList.add('button-is-clicked')
//     //     button.classList.add('is-clicked')   
//     // }

//     body.classList.toggle('button-is-clicked')
//     button.classList.toggle('is-clicked')   

    
// })

// const val = event => {
    
// }

// button.addEventListener('click', function(){
//     button.classList.add('red')
// })

// button.addEventListener('click', function(){
//     console.log('Hello world!')
// })

// function addOne(n){
//     document.write(`adding ToDo list by Event Loop ${n + 1} <br/>`)
// }

// addOne(1)
// addOne(2)
// addOne(3)
// addOne(4)

// // function orderPizza(flavor, callback){
// //     callPizzaShop(`I want a ${flavor} pizza`)

// //     // whenPizzaComesBack {
// //     //     callback()
// //     // }
// // }

// // function layTheTable(){
// //     console.log('The pizza is set for a consumption, master. Please stop playing and start eating')
// // }

// // orderPizza('Hawiian', layTheTable)  



// console.log('Event loop running.....')

// setTimeout(() => {
//     console.log('Wating list - Web Api')
// },1);

// console.log('Loop work')


// function callbackAcceptingFunction(callback){
//     // Execute callback here
//     callback('Hello', 'baby brother')
// }
    
// function callback(arg1,arg2){
//     // Do something
//     console.log(arg1)
//     console.log(arg2)
// }

// callbackAcceptingFunction(callback)







// const fruitBasket = ['apple', 'banana', 'orange', 'pear']


// // fruitBasket.unshift('watermelon')
// // fruitBasket.unshift('pomogrante','chiku','muskmelon')
// // fruitBasket.push('papaya','grapes')
// // console.log(fruitBasket)

// // const itemOne = fruitBasket.shift()
// // const itemTwo = fruitBasket.shift()
// // console.log(fruitBasket)
// // console.log(itemOne)
// // console.log(itemTwo)

// // const popLast = fruitBasket.pop()
// // const popSecondLast = fruitBasket.pop()
// // console.log(fruitBasket)


// const number = [3,4,5]
// // number.splice(0,0,1,2)
// // number.splice(number.length,0,6,7)
// // number.splice(3,0,10,11)
// // number.splice(0,2)
// const copy = number.splice()
// copy.push(6)
// console.log(number)
// console.log(copy)





// // let people = [
// //   'Benjamin Franklin',
// //   'Thomas Edison',
// //   'Franklin Roosevelt',
// //   'Mahatma Gandhi',
// //   'Napoleon Bonaparte',
// //   'Abraham Lincoln'
// // ]

// // const posMahatma = people.indexOf('Mahatma Gandhi')
// // console.log(posMahatma)

// // people.unshift('Winston Churchill','Albert Einstein')
// // people.splice(0,0,'Winston Churchill','Albert Einstein')
// // people.push('Charles Darwin','Walt Disney')
// // people.splice(people.length,0,'Charles Darwin','Walt Disney')
// // people.splice(6,0,'Pablo Picasso','Ludwig van Beethoven')
// // const remOne = people.shift('Benjamin Franklin')
// // const remTwo = people.shift('Thomas Edison')
// // people.splice(0,2)
// // people.pop()
// // people.pop()
// // people.splice(people.length - 2,2)
// // people.splice(3,1)
// // console.log(people)


// for(let i = 0; i < 2; i++) {
//     const timesBounced = i + 1
//     console.log('The ball has bounced ' + timesBounced + ' times')
// }

// const numbers = [25,22,12,56,8,18,34]

// for (let i = 0; i < numbers.length; i++) {
//     const num = numbers[i];
//     if(num < 20){
//         console.log(num + ' is less than 20!')
//     }
// }


// const nums = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]
// const newNumbs = []

// // for(let i = 0; i < nums.length; i++){
// //     // console.log(nums[i])

// //     // const greaterNum = nums[i]
// //     // if(greaterNum > 5) {
// //     //     console.log('This ' + greaterNum + ' is Grater than 5')
// //     // }
// // }

// for(const num of nums){
//     if(num * 5) {
//         newNumbs.push(num)
//     }
// }

// console.log(newNumbs);

// const fruitBaskets = ['Jackfruit', 'Custard Apple', 'Pomogranate']

// fruitBaskets.forEach(fruit => console.log(fruit))

// // for(let fr of fruitBaskets) {
// //     document.write(fr + ' <br/>')
// // }

// // for(i = 0 ; i < fruitBaskets.length; i++){
// //     console.log(fruitBaskets[i])
// // }


// const people = [
//   { firstName: 'Benjamin', lastName: 'Franklin', yearOfDeath: 1790 },
//   { firstName: 'Thomas', lastName: 'Edison', yearOfDeath: 1931 },
//   { firstName: 'Franklin', lastName: 'Roosevelt', yearOfDeath: 1945 },
//   { firstName: 'Napolean', lastName: 'Bonaparte', yearOfDeath: 1821 },
//   { firstName: 'Abraham', lastName: 'Lincoln', yearOfDeath: 1865 },
//   { firstName: 'Mother', lastName: 'Theresa', yearOfDeath: 1962 },
//   { firstName: 'Mahatma', lastName: 'Gandhi', yearOfDeath: 1948 },
//   { firstName: 'Winston', lastName: 'Churchill', yearOfDeath: 1965 },
//   { firstName: 'Charles', lastName: 'Darwin', yearOfDeath: 1882 },
//   { firstName: 'Albert', lastName: 'Einstein', yearOfDeath: 1955 },
//   { firstName: 'Pablo', lastName: 'Picasso', yearOfDeath: 1973 },
//   { firstName: 'Ludwig', lastName: 'Beethoven', yearOfDeath: 1827 },
//   { firstName: 'Walt', lastName: 'Disney', yearOfDeath: 1966 },
//   { firstName: 'Henry', lastName: 'Ford', yearOfDeath: 1947 },
//   { firstName: 'Steve', lastName: 'Jobs', yearOfDeath: 2012 }
// ]

// const fNameArray = []
// const diedPeople = []

// people.forEach((fName, index) => console.log( index + ' => ' + fName.firstName))

// people.forEach(fName => fNameArray.push(fName.firstName))
// console.log(fNameArray)

// people.forEach(yearDeath => {
//     if(yearDeath.yearOfDeath > 1950){
//         diedPeople.push(yearDeath)
//     }
// })

// people.forEach((ch,index) => {
//     if(ch.firstName === "Ludwig"){
//         console.log(index)
//     }
// })

// // const paragraphs = document.querySelectorAll('p')
// // console.log(paragraphs)


// // console.log(diedPeople)

// const buttonClass = document.querySelector('.button')

// buttonClass.addEventListener('click', event => {
//     buttonClass.style.color = "black"
//     buttonClass.style.backgroundColor = "lightpink"
//     buttonClass.style.width = "150px"
//     buttonClass.style.height = "5rem"
// })

// const element = document.querySelector('.element')
// const elementColor = element.style.fontSize
// console.log(elementColor)


// const elementBackgroundColor = getComputedStyle(element)
// const style = elementBackgroundColor.backgroundColor
// console.log(elementBackgroundColor)


// const clownHat = document.querySelector('.clown-hat')
// const clownHatColor = clownHat.getAttribute('data-color')
// const clownHatNumber = parseInt(clownHat.getAttribute('data-num-stripes'))
// clownHat.dataset.numStripes = 4
// console.log(clownHat.dataset)

// const domRect = document.querySelector('.dom-react')

// console.log(domRect.getBoundingClientRect())

// const component = document.querySelector('.component')
// const componentElement = document.querySelector('.component__element')
// console.log(componentElement)

// const list = document.querySelector('.list')
// const firstList = list.firstElementChild
// const firstListItem = document.querySelector('.li')
// const lists = firstListItem.parentElement
// console.log(lists)

// const closestAncestor = firstListItem.closest('.list')
// console.log(closestAncestor)

// const secondList = firstListItem.nextElementSibling
// console.log(secondList)

// const secondListItem = document.querySelectorAll('li')[1]
// const firstListItems = secondListItem.previousElementSibling
// console.log(firstListItems)


// const characters = document.querySelector('.characters')
// const humans = characters.children[3]
// const humans = document.querySelectorAll('.humans')
// console.log(humans)

// const hobbits = document.querySelector('.hobbits')
// const hobbitsNodes = hobbits.children[2]
// console.log(hobbitsNodes)

// const elves = document.querySelector('.elves')
// const glorfindel = elves.children[1]
// console.log(glorfindel.textContent)

// const elrond = glorfindel.nextElementSibling
// console.log(elrond.textContent)

// const legolas = glorfindel.previousElementSibling
// console.log(legolas.textContent)

// const enemies = document.querySelector('.enemies')
// const nazgul = enemies.children[1]
// const findChar = nazgul.closest('.characters')
// console.log(nazgul.textContent)
// console.log(findChar)

// function changeButtonColorToBlue(e){
//     e.currentTarget.style.backgroundColor = "blue"
// }


// const someClick = document.querySelector('.click')
// someClick.addEventListener('click', changeButtonColorToBlue)


// const link = document.querySelector('a')

// link.addEventListener('click', evt => {
//     evt.preventDefault()
// })

// const checkbox = document.querySelector('input')

// checkbox.addEventListener('click', e => {
//     e.preventDefault()
// })

// const boxes = document.querySelectorAll('.box')
// boxes.forEach(box => {
//     box.addEventListener('click', function(e) {
//        console.log(e.eventPhase, e.currentTarget)
//     })
// })

// function listener(e) {
//     console.log(e.eventPhase, e.currentTarget)
// }


// const box3 = document.querySelector('.box3')
// box3.addEventListener('click', listener, true)
// box3.addEventListener('click', listener)



// const greatPeople = document.querySelector('ul')

// greatPeople.addEventListener('click', e => {
//    if(e.target.closest('li')) {
//        console.log(e.target)
//    }
// })

const listenForFiveClicks = e => {   
    const elem = e.currentTarget
    const prevCount = parseInt(elem.dataset.count) || 0
    const currentCount = prevCount + 1

    elem.dataset.count = currentCount
    console.log(`clicked ${currentCount} times`)

    if(currentCount === 5) {
        elem.removeEventListener('click', listenForFiveClicks)
    }
}

const button = document.querySelector('button')
button.addEventListener('click', listenForFiveClicks)


const goodGuy = document.querySelectorAll('[data-type="good-guy"]')
const character = document.querySelectorAll('.character')

character.forEach(c => {
    c.classList.add('star-wars')
})

goodGuy.forEach(c => {
    c.classList.add('yay')
})


function callback () {
    // do something
    
}
  

const elementOnEvent = document.querySelector('.event-listner')

elementOnEvent.addEventListener('click', () => {
    elementOnEvent.classList.add('red')
})

elementOnEvent.addEventListener('click', () => {
    console.log('Hello World')
})

function callbackAcceptingFunction(callback) {
    // Execute callback here
    callback('1', '2')
}

function callback (arg1, arg2) {  
    // Do something here
    console.log(arg1)
    
    console.log(arg2)
}

callbackAcceptingFunction(callback);

// Home work

const multiply = (num1, num2) => num1 * num2

console.log(multiply(5,5))