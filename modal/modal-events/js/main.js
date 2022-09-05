const modalButton = document.querySelector('.jsModalButton')
const modalCloseButton = document.querySelector('.jsModalClose')
const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const  wavingHand = document.querySelector('.wave-hand')


modalButton.addEventListener('click', event => {
  document.body.classList.add('modal-is-open')
  wave()
})

modalCloseButton.addEventListener('click', event => {
  document.body.classList.remove('modal-is-open')
})

modalOverlay.addEventListener('click', event => {
  // document.body.classList.remove('modal-is-open')
  // console.log(event.target)
  if (!event.target.closest('.modal')) {
    document.body.classList.remove('modal-is-open')
  } 
})


// Wave hand animation here
      function wave () {
        const tl = new TimelineMax({})

        tl.set(wavingHand, {transformOrigin: 'bottom center'})
        tl.from(wavingHand, 0.5, {
          scale : 0.25,
          opacity : 0,
          ease: Back.easeOut.config(1.5)
        })

        tl.to(wavingHand, 0.2, { rotation: 15 })
        tl.to(wavingHand, 0.2, { rotation: -15 })
        tl.to(wavingHand, 0.2, { rotation: 15 })
        tl.to(wavingHand, 0.2, { rotation: -15 })
        tl.to(wavingHand, 0.2, { rotation: 0 })
      }




// modal.addEventListener('click', event => {
//     event.stopPropagation()
// })