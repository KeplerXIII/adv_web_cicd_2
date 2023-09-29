import { Character } from './components/widget_game/character'
import { Field } from './components/widget_game/field'
import { Counter } from './components/widget_game/counter'

document.addEventListener('DOMContentLoaded', function () {
  const gameContainer = document.getElementById('game-container')
  const counter = new Counter('.score-container')
  const character = new Character(gameContainer)
  const field = new Field(gameContainer)

  field.createField(16)

  const initialPosition = character.getRandomPosition(character.currentPosition)
  character.moveCharacter(initialPosition)

  let moveInterval = setInterval(function () {
    const newPosition = character.getRandomPosition(character.currentPosition)
    character.moveCharacter(newPosition)
    counter.addBadScore()
  }, 1000)

  character.character.addEventListener('click', function () {
    counter.addScore()
    counter.badScore = 0

    clearInterval(moveInterval)

    const newPosition = character.getRandomPosition(character.currentPosition)
    character.moveCharacter(newPosition)

    moveInterval = setInterval(function () {
      const newPosition = character.getRandomPosition(character.currentPosition)
      character.moveCharacter(newPosition)
      counter.addBadScore()
    }, 1000)
  })
})
