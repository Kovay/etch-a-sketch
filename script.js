let cellNum = 16
let size = 250/cellNum;
let totalCell = cellNum * cellNum;
let cellBreak = 0

const button = document.querySelector('#button')
button.onclick = function() {
  cellNumStr = prompt("how many sides should the grid have?");
  cellNum = Number(cellNumStr);
  size = 250/cellNum;
  totalCell = cellNum * cellNum;
  reloadGrid()
  let setColor = document.querySelectorAll('.cell');
  setColor.forEach(div => div.addEventListener('mouseover', (e) => e.target.style.background = 'black'));
}

function reloadGrid() {
  for (let i = 0; i < totalCell; i++) {
    const divGrid = document.querySelector('#divGrid');
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.padding = size-1 + 'px';
    divGrid.appendChild(cell);
    cellBreak++;
    console.log(cellBreak, cellNum);
    if (cellBreak === cellNum) {
      const lineBreak = document.createElement('div');
      lineBreak.classList.add('lineBreak');
      lineBreak.style.display = 'inline';
      divGrid.appendChild(lineBreak);
      cellBreak = 0;
    }
  }
}
