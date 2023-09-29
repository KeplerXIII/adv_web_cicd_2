import { Character } from './components/widget_game/character'
import { Field } from './components/widget_game/field'
import { Counter } from './components/widget_game/counter'

document.addEventListener('DOMContentLoaded', function () {
  const gameContainer = document.getElementById('game-container')
  const counter = new Counter('.score-container')
  const character = new Character(gameContainer)
  const field = new Field(gameContainer)

  field.createField(16)

  function moveAndCount () {
    const newPosition = character.getRandomPosition(character.currentPosition)
    character.moveCharacter(newPosition)
    counter.addBadScore()
  }

  let moveInterval = setInterval(moveAndCount, 1000)

  character.character.addEventListener('click', function () {
    counter.addScore()
    counter.badScore = 0
    clearInterval(moveInterval)
    moveAndCount()
    moveInterval = setInterval(moveAndCount, 1000)
  })
})
