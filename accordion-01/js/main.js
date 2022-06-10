


const accordions = Array.from(document.querySelectorAll('.accordion'))
// const accordionHeader = accordion.querySelector('.accordion__header')

// const accordionSecond = accordion[1]
// const accordionSecondHeader = accordionSecond.querySelector('.accordion__header')

// accordionSecondHeader.addEventListener('click', event => {
//     accordion[1].classList.toggle('is-open')
// })

accordions.forEach(accordion => {
    const accordionHeader = accordion.querySelector('.accordion__header')

    accordionHeader.addEventListener('click', event => {
        accordion.classList.toggle('is-open')
    })
})