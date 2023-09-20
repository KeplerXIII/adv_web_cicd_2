export class CharMoving {
  constructor (elem) {
    this.gameContainer = elem
    const character = document.createElement('img')
    character.src = 'https://github.com/netology-code/ahj-homeworks/blob/video/dom/pic/goblin.png?raw=true'
    character.id = 'character'
    this.character = character
  }

  moveCharacter (position) {
    const cell = document.getElementById('cell-' + position)
    cell.appendChild(this.character)
  }

  currentPosition () {
    const currentPosition = document.getElementById('character')
    return currentPosition.parentElement.id.slice(5)
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
