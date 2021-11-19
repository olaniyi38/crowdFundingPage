/**bookmark toggle */

let bookmarkToggleBtn = document.querySelector('.header .cta .bookmark-toggle svg')

let bookMarkToggle = (e) => {

  let container = document.querySelector('.header .cta .bookmark-toggle')
  let circle = document.querySelector('.header .cta .bookmark-toggle svg circle')
  let path = document.querySelector('.header .cta .bookmark-toggle svg path')

  circle.classList.toggle('active')
  path.classList.toggle('active')
  container.classList.toggle('active')

  let text = document.querySelector('.header .cta .bookmark-toggle span')
  circle.classList.contains('active') ? text.textContent = 'Bookmarked' : text.textContent = 'Bookmark'

}
bookmarkToggleBtn.addEventListener('click', bookMarkToggle)

/**modal selection toggle */

let radios = document.querySelectorAll('.selection-modal .select')
let cards = document.querySelectorAll('.selection-modal .card')
let cardCtas = document.querySelectorAll('.selection-modal .card .card-footer')

let unHighlightCards = () => {
  cards.forEach((card) => {
    card.classList.remove('active')
  })
  cardCtas.forEach((cta) => {
    cta.classList.add('hide')
  })
  radios.forEach((radio) => {
    radio.classList.remove('active')
  })

}

let radioToggle = (e) => {
  unHighlightCards()
  let radio = e.target
  let selectedCard = document.querySelector(`.${radio.dataset.option}`)
  let cardCta = document.querySelector(`.${radio.dataset.option}.card .card-footer `)
  radio.classList.toggle('active')
  selectedCard.classList.toggle('active')
  cardCta ? cardCta.classList.toggle('hide') : null

}


radios.forEach((radio) => {
  radio.addEventListener('click', radioToggle)
})

/**selction modal toggle and successmodal */

let darkBg = document.querySelector('.dark-bg')

let selectionModalToggleBtn = document.querySelector('.modal-toggle')
let selectionModal = document.querySelector('.selection-modal')
let selectionModalCloseBtn = document.querySelector('.selection-modal .close')

/** success modal */

let successModal = document.querySelector('.success-modal')
let successModalTrigger = document.querySelectorAll('.selection-modal .card .cta .btn')
let successModalCloseBtn = document.querySelector('.success-modal .close')


selectionModalToggleBtn.addEventListener('click', () => {
  selectionModal.classList.add('active')
  darkBg.classList.toggle('active')
})
selectionModalCloseBtn.addEventListener('click', () => {
  selectionModal.classList.remove('active')
  darkBg.classList.toggle('active')
  unHighlightCards()
})

successModalTrigger.forEach((button) => {
  button.addEventListener('click', () => {
    selectionModal.classList.remove('active')
    setTimeout(() => {
      successModal.classList.remove('hide')
    }, 1500)
  })
  unHighlightCards()
})

successModalCloseBtn.addEventListener('click', () => {
  successModal.classList.add('hide')
  darkBg.classList.toggle('active')
  unHighlightCards()
})