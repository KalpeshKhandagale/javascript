// Start writing JavaScript here!
const carousel = document.querySelector('.carousel')
const previousButton = carousel.querySelector('.previous-button')
const nextButton = carousel.querySelector('.next-button')
const contents = document.querySelector('.carousel__contents')
const dots = Array.from(document.querySelectorAll('.carousel__dot'))
const slides = Array.from(carousel.querySelectorAll('.carousel__slide'))
const dotContainer = carousel.querySelector('.carousel__dots')


nextButton.addEventListener('click', event => {
    const currentSlide = contents.querySelector('.is-selected')
    const nextSlide = currentSlide.nextElementSibling
    const destination = getComputedStyle(nextSlide).left

    // contents.style.left = '-' + destination
    contents.style.transform = 'translateX(-' + destination + ')'
    currentSlide.classList.remove('is-selected')
    nextSlide.classList.add('is-selected')

    // show previous button
    previousButton.removeAttribute('hidden')

    // Hides next button
    if (!nextSlide.nextElementSibling) {
        nextButton.setAttribute('hidden', true)
    }

    // Highlight dot
    const currentDot = dotContainer.querySelector('.is-selected')
    const nextDot = currentDot.nextElementSibling
    currentDot.classList.remove('is-selected')
    nextDot.classList.add('is-selected')
})

previousButton.addEventListener('click', event => {
    const currentSlide = contents.querySelector('.is-selected')
    const previousSlide = currentSlide.previousElementSibling
    const destination = getComputedStyle(previousSlide).left

    // contents.style.left = '-' + destination
    contents.style.transform = 'translateX(-' + destination + ')'
    currentSlide.classList.remove('is-selected')
    previousSlide.classList.add('is-selected')

    // Shows next button
    nextButton.removeAttribute('hidden')    

    // Hides previous button
    if (!previousSlide.previousElementSibling) {
        previousButton.setAttribute('hidden', true)
    }

    // Highlight dot
    const currentDot = dotContainer.querySelector('.is-selected')
    const prevDot = currentDot.previousElementSibling
    currentDot.classList.remove('is-selected')
    prevDot.classList.add('is-selected')
})

// dots.forEach(dot => {
//     dot.addEventListener('click', event => {
//         let clickedDotIndex

//         for (let index = 0; index < dots.length; index++) {
//             if (dots[index] === dot) {
//                 clickedDotIndex = index
//             }
//         }
//         // console.log(clickedDotIndex)

//         const slideToShow = slides[clickedDotIndex]
//         const destination = getComputedStyle(slideToShow).left
//         const currentSlide = contents.querySelector('.is-selected')

//         slides.forEach(slide => {
//             slide.classList.remove('is-selected')
//         })
//         slideToShow.classList.add('is-selected')
//         // contents.style.left = '-' + destination
//         contents.style.transform = 'translateX(-' + destination + ')'

//         // console.log(destination)


//         dots.forEach(d => {
//             d.classList.remove('is-selected')
//         })

//         dot.classList.add('is-selected')


//         // Show / hide buttons
//         if (clickedDotIndex === 0) {
//             previousButton.setAttribute('hidden', true)            
//             nextButton.removeAttribute('hidden')
//         } else if (clickedDotIndex === dots.length - 1) {
//             previousButton.removeAttribute('hidden')
//             nextButton.setAttribute('hidden', true)
//         } else {
//             previousButton.removeAttribute('hidden')
//             nextButton.removeAttribute('hidden')
//         }
//     })
// })

dotContainer.addEventListener('click', event => {
    const dot = event.target.closest('button')
    if (dot) {
        console.log('event delegation dot')
    }
})


