export class Field {
  constructor (elem) {
    if (typeof elem === 'string') {
      elem = document.querySelector(elem)
    }
    this.elem = elem
  }

  createField (cellCount) {
    for (let i = 1; i <= cellCount; i++) {
      const cell = document.createElement('div')
      cell.className = 'cell'
      cell.id = 'cell-' + i
      this.elem.appendChild(cell)
    }
  }
}
