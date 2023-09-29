export class Popup {
  constructor (elem) {
    if (typeof elem === 'string') {
      elem = document.querySelector(elem)
    }
    this.elem = elem
    this.btn = elem.querySelector('.closePopupBtn')

    this.closePopup = this.closePopup.bind(this)

    this.btn.addEventListener('click', this.closePopup)
  }

  openPopup () {
    this.elem.style.display = 'block'
  }

  closePopup () {
    this.elem.style.display = 'none'
    location.reload()
  }
}
