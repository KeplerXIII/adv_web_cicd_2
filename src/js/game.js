import { Character } from './components/widget_game/character'
import { Field } from './components/widget_game/field'
import { Counter } from './components/widget_game/counter'
import cursor from '../cursors/cursor.cur'
import cursorGoal from '../cursors/cursorGoal.cur'

document.addEventListener('DOMContentLoaded', function () {
  const counter = new Counter('.score-container')
  const character = new Character('.game-container')
  const field = new Field('.game-container')

  field.createField(16)

  field.elem.style.cursor = `url(${cursor}), auto`

  character.character.addEventListener('click', () => {
    field.elem.style.cursor = `url(${cursorGoal}), auto`
    setTimeout(() => {
      field.elem.style.cursor = `url(${cursor}), auto`
    }, 100)
  })

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
