import { CharMoving } from './components/char_moving'
import { CellCreator } from './components/cell_create'

document.addEventListener('DOMContentLoaded', function () {
  const gameContainer = document.getElementById('game-container')
  const charMover = new CharMoving(gameContainer)
  const cellCreator = new CellCreator(gameContainer)

  // Создаём поле
  cellCreator.createField(16)

  // Генерируем случайную начальную позицию для персонажа
  const initialPosition = charMover.getRandomPosition(0)
  charMover.moveCharacter(initialPosition)

  // Устанавливаем интервал для перемещения персонажа
  setInterval(function () {
    const newPosition = charMover.getRandomPosition(charMover.currentPosition())
    charMover.moveCharacter(newPosition)
  }, 1000)
})
