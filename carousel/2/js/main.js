const carousel = document.querySelector('.carousel')
const previousButton = carousel.querySelector('.previous-button')
const nextButton = carousel.querySelector('.next-button')
const contents = document.querySelector('.carousel__contents')

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
})

