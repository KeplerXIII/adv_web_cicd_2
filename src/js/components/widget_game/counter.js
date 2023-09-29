import { Popup } from '../widget_popup/popup'

const popup = new Popup('.popup-container')

export class Counter {
  constructor (elem) {
    if (typeof elem === 'string') {
      elem = document.querySelector(elem)
    }
    this.elem = elem
    this.score = 0
    this.badScore = 0
  }

  addScore () {
    this.score += 1
    this.elem.querySelector('.game-score').textContent = this.score
  }

  addBadScore () {
    this.badScore += 1
    if (this.badScore > 4) {
      popup.openPopup()
    }
  }
}
