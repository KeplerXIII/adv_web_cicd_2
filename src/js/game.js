import { Character } from './components/widget_game/character'
import { Field } from './components/widget_game/field'

document.addEventListener('DOMContentLoaded', function () {
  const gameContainer = document.getElementById('game-container')
  const character = new Character(gameContainer)
  const field = new Field(gameContainer)

  // Создаём поле
  field.createField(16)

  // Генерируем случайную начальную позицию для персонажа
  const initialPosition = character.getRandomPosition(character.currentPosition)
  character.moveCharacter(initialPosition)

  // Устанавливаем интервал для перемещения персонажа
  setInterval(function () {
    const newPosition = character.getRandomPosition(character.currentPosition)
    character.moveCharacter(newPosition)
  }, 1000)
})
