// Start writing JavaScript here!
const carousel = document.querySelector('.carousel')
const previousButton = carousel.querySelector('.previous-button')
const nextButton = carousel.querySelector('.next-button')
const contents = document.querySelector('.carousel__contents')
const dots = Array.from(document.querySelectorAll('.carousel__dot'))
const slides = Array.from(carousel.querySelectorAll('.carousel__slide'))

nextButton.addEventListener('click', event => {
    const currentSlide = contents.querySelector('.is-selected')
    const nextSlide = currentSlide.nextElementSibling
    const destination = getComputedStyle(nextSlide).left

    contents.style.left = '-' + destination
    currentSlide.classList.remove('is-selected')
    nextSlide.classList.add('is-selected')

    // show previous button
    previousButton.removeAttribute('hidden')

    // Hides next button
    if (!nextSlide.nextElementSibling) {
        nextButton.setAttribute('hidden', true)
    }
})

previousButton.addEventListener('click', event => {
    const currentSlide = contents.querySelector('.is-selected')
    const previousSlide = currentSlide.previousElementSibling
    const destination = getComputedStyle(previousSlide).left

    contents.style.left = '-' + destination
    currentSlide.classList.remove('is-selected')
    previousSlide.classList.add('is-selected')

    // Shows next button
    nextButton.removeAttribute('hidden')    

    // Hides previous button
    if (!previousSlide.previousElementSibling) {
        previousButton.setAttribute('hidden', true)
    }
})

dots.forEach(dot => {
    dot.addEventListener('click', event => {
        let clickedDotIndex

        for (let index = 0; index < dots.length; index++) {
            if (dots[index] === dot) {
                clickedDotIndex = index
            }
        }

        // console.log(clickedDotIndex)

        const slideToShow = slides[clickedDotIndex]
        const destination = getComputedStyle(slideToShow).left
        const currentSlide = contents.querySelector('.is-selected')

        slides.forEach(slide => {
            slide.classList.remove('is-selected')
        })
        slideToShow.classList.add('is-selected')
        contents.style.left = '-' + destination


        // console.log(destination)
    })
})