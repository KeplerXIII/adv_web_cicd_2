document.addEventListener('DOMContentLoaded', function () {
  const gameContainer = document.getElementById('game-container')

  // Генерируем и добавляем клетки в игровое поле
  for (let i = 1; i <= 16; i++) {
    const cell = document.createElement('div')
    cell.className = 'cell'
    cell.id = 'cell-' + i
    gameContainer.appendChild(cell)
  }

  // Генерируем случайную начальную позицию для персонажа
  const initialPosition = getRandomPosition(0)
  moveCharacter(initialPosition)

  // Устанавливаем интервал для перемещения персонажа
  setInterval(function () {
    const newPosition = getRandomPosition()
    moveCharacter(newPosition)
  }, 1000)

  function moveCharacter (position) {
    const cell = document.getElementById('cell-' + position)
    cell.appendChild(document.getElementById('character'))
  }

  function getRandomPosition (lastPosition) {
    const newPosition = Math.floor(Math.random() * document.querySelectorAll('.cell').length) + 1
    if (lastPosition === newPosition) {
      return getRandomPosition(lastPosition)
    } else { return newPosition }
  }
})
