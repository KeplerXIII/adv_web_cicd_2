export class Character {
  constructor (elem) {
    if (typeof elem === 'string') {
      elem = document.querySelector(elem)
    }
    this.gameContainer = elem
    this.currentPosition = 0
    const character = document.createElement('img')
    character.src = 'https://github.com/netology-code/ahj-homeworks/blob/video/dom/pic/goblin.png?raw=true'
    character.id = 'character'
    this.character = character
  }

  moveCharacter (position) {
    const cell = document.getElementById('cell-' + position)
    this.currentPosition = position
    cell.appendChild(this.character)
  }

  getRandomPosition (lastPosition) {
    const newPosition = Math.floor(Math.random() * document.querySelectorAll('.cell').length) + 1
    if (lastPosition === newPosition) {
      return this.getRandomPosition(lastPosition)
    } else {
      return newPosition
    }
  }
}
