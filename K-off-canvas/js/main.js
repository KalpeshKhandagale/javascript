// your javascript goes here
const body = document.body
const button = document.querySelector('button')
const menu = document.querySelector('.nav')

/** 
* // Checks if offCanvasMenu is open
* @returns Boolean
*/


const isOffCanvasMenuOpen = () => {
    return body.classList.contains('offsite-is-open')
}


// Open offCanvasMenu
const openOffCanvasMenu = () => {
    body.classList.add('offsite-is-open')
    menu.focus()
}


// Close offCanvasMenu
const closeOffCanvasMenu = () => {
    body.classList.remove('offsite-is-open')
    button.focus()
}

// Open and Close offCanvasMenu when button is clicked
button.addEventListener('click', event => {
    isOffCanvasMenuOpen()
        ? closeOffCanvasMenu()
        : openOffCanvasMenu()
})

// Close openOffCanvasMenu when Escape key pressed
document.addEventListener('keydown', event => {
    if(isOffCanvasMenuOpen() && event.key === 'Escape'){
        closeOffCanvasMenu()
    }
})



