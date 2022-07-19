const carousel = document.querySelector('.carousel')
const previousButton = carousel.querySelector('.previous-button')
const nextButton = carousel.querySelector('.next-button')
const contents = document.querySelector('.carousel__contents')
const dots = Array.from(carousel.querySelectorAll('.carousel__dot'))
const slides = Array.from(carousel.querySelectorAll('.carousel__slide'))
const dotsContainer = carousel.querySelector('.carousel__dots')
const rect = slides[0].getBoundingClientRect()
const slideWidth = slides[0].getBoundingClientRect().width

slides[0].style.left = slideWidth * 0 + 'px'
slides[1].style.left = slideWidth * 1 + 'px'
slides[2].style.left = slideWidth * 2 + 'px'

// console.log(slideWidth)



nextButton.addEventListener('click', event => {
    const currentSlide = contents.querySelector('.is-selected')
    const nextSlide = currentSlide.nextElementSibling;
    const destination = getComputedStyle(nextSlide).left

    contents.style.left = '-' + destination
    currentSlide.classList.remove('is-selected')
    nextSlide.classList.add('is-selected')
    // console.log(destination)

    // show the previous button
    previousButton.removeAttribute('hidden')

    // hide the next button
    if(!nextSlide.nextElementSibling) {
        nextButton.setAttribute('hidden', true)
    }

    // Highlight dot
    const currentDot = dotsContainer.querySelector('.is-selected')
    const nextDot = currentDot.nextElementSibling
    currentDot.classList.remove('is-selected')
    nextDot.classList.add('is-selected')
})

previousButton.addEventListener('click', event => {
    const currentSlide = contents.querySelector('.is-selected')
    const previousSlide = currentSlide.previousElementSibling
    const destination = getComputedStyle(previousSlide).left
    // console.log(destination)

    contents.style.left = '-' + destination
    currentSlide.classList.remove('is-selected')
    previousSlide.classList.add('is-selected')

    // show the next button 
    nextButton.removeAttribute('hidden')

    // hide previous button
    if (!previousSlide.previousElementSibling) {
        previousButton.setAttribute('hidden', true)
    }

    // Highlight dot
    const currentDot = dotsContainer.querySelector('.is-selected')
    const previousDot = currentDot.previousElementSibling
    currentDot.classList.remove('is-selected')
    previousDot.classList.add('is-selected')
})


dots.forEach(dot => {
    dot.addEventListener('click', event => {
        let clickedDotIndex

        for (let index = 0; index < dots.length; index++) {
            if (dots[index] === dot) {
                clickedDotIndex = index
            }
        }

        const slideShow = slides[clickedDotIndex]
        const destination = getComputedStyle(slideShow).left
        const currentSlide = contents.querySelector('.is-selected')
        currentSlide.classList.remove('is-selected')

        slideShow.classList.add('is-selected')
        contents.style.left = '-' + destination

        dots.forEach(d => {
            d.classList.remove('is-selected')
        })

        dot.classList.add('is-selected')

        // Show / hide buttons

        if (clickedDotIndex === 0) {
            previousButton.setAttribute('hidden', true)
            nextButton.removeAttribute('hidden')
        } else if (clickedDotIndex === dots.length - 1) {
            previousButton.removeAttribute('hidden')
            nextButton.setAttribute('hidden', true)
        } else {
            previousButton.removeAttribute('hidden')
            nextButton.removeAttribute('hidden')
        }
    })
})

// dotsContainer.addEventListener('click', event => {
//     const dot = event.target.matches('button')

//     if (dot) {
//         console.log('Event Delegation Trigger with matches event')
//     }
// })

slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px'
})