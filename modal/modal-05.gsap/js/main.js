/* global TimelineMax Back */
const modalButton = document.querySelector('.jsModalButton')
const modalCloseButton = document.querySelector('.jsModalClose')
const modalOverlay = document.querySelector('.modal-overlay')
const wavingHand = document.querySelector('.wave-hand')

/**
 * Waves hand
 */
const wave = _ => {
  const tl = new TimelineMax({})
  // Sets transform origin
  tl.set(wavingHand, { transformOrigin: 'bottom center' })
  tl.from(wavingHand, 0.5, { scale: 0.25, opacity: 0, ease: Back.easeOut.config(1.5) })
  tl.to(wavingHand, 0.2, { rotation: 15 })
  tl.to(wavingHand, 0.2, { rotation: -15 })
  tl.to(wavingHand, 0.2, { rotation: 15 })
  tl.to(wavingHand, 0.2, { rotation: -15 })
  tl.to(wavingHand, 0.2, { rotation: 0 })
}

modalButton.addEventListener('click', event => {
  document.body.classList.add('modal-is-open')
  wave()
})

modalCloseButton.addEventListener('click', event => {
  document.body.classList.remove('modal-is-open')
})

modalOverlay.addEventListener('click', event => {
  if (!event.target.closest('.modal')) {
    document.body.classList.remove('modal-is-open')
  }
})
