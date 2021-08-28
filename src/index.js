const refs = {
    dataMenuBtn: document.querySelector('#modal-btn'),
    dataMenu: document.querySelector('[data-menu]')
}

refs.dataMenuBtn.addEventListener('click', onModalOpen)

function onModalOpen(e) {
    const expanded = refs.dataMenuBtn.getAttribute('aria-expanded') === 'true' || false
    console.log(expanded)

    refs.dataMenuBtn.classList.toggle('is-open')
    refs.dataMenuBtn.setAttribute('aria-expanded', !expanded)

    refs.dataMenu.classList.toggle('is-open')
}