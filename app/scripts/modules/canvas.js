export const CANVAS = document.getElementById('grid_canvas');
export const CONTEXT = CANVAS.getContext('2d');

let ROWS;
let COLUMNS;
let ROW_SIZE;
let COLUMN_SIZE;

function cx(x) {
  return CANVAS.width * x;
}

function cy(y) {
  return CANVAS.height * y;
}

export function moveTo(x, y) {
  CONTEXT.moveTo(cx(x), cy(y));
}

export function drawLine(x, y) {
  CONTEXT.lineTo(cx(x), cy(y));
  CONTEXT.stroke();
}

function drawDigit(row, digit, value) {
  const img = new Image();
  img.src = `images/${value}.png`;

  moveTo(0.0, 0.0);

  const imgX = cx(1.0 - COLUMN_SIZE / 2.5) - (digit * cx(COLUMN_SIZE / 2.0));
  const imgY = row * cy(ROW_SIZE) + cy(0.1 + 0.005 * (COLUMNS)) - (cy(0.1) * (digit % 2));
  let imgSize = 0;

  if (ROWS > COLUMNS) {
    imgSize = cy(ROW_SIZE / 1.5);
  } else {
    imgSize = cx(COLUMN_SIZE / 2.5);
  }

  img.onload = function load() {
    CONTEXT.drawImage(this, imgX, imgY, imgSize, imgSize);
  };
}

export function setNumberOnRow(row, number) {
  // const size = number.toString().length;

  let i = 0;
  do {
    drawDigit(row, i++, number % 10);
    number = Math.floor(number / 10);
  } while (number > 0);

  /* for (let i = 1; i <= size; i++) {
    drawDigit(row, i - 1, number % (i * 10));
  } */
}

export function drawTable(rows, columns, drawDiagonals) {
  ROWS = rows;
  COLUMNS = columns;

  ROW_SIZE = 1.0 / rows;
  COLUMN_SIZE = 1.0 / columns;

  CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);
  CONTEXT.beginPath();

  for (let row = 1; row < rows; row++) {
    const rowHeight = row * ROW_SIZE;
    const columnWidth = row * COLUMN_SIZE;

    moveTo(0.0, rowHeight);
    drawLine(1.0, rowHeight);

    if (drawDiagonals) {
      moveTo(0.0, rowHeight);
      drawLine(columnWidth, 0.0);
    }
  }

  /* if (drawDiagonals) {
    moveTo(0.0, 1.0);
    if (rows < columns) {
      drawLine(1.0 - (columnSize * (columns - rows - 1)), 0.0);
    } else if (rows > columns) {
      drawLine(1.0, rowSize * (rows - columns - 1));
    } else {
      drawLine(1.0, 0.0);
    }
  } */


  for (let column = 1; column < columns; column += 1) {
    const rowHeight = (column) * ROW_SIZE;
    const columnWidth = column * COLUMN_SIZE;

    moveTo(columnWidth, 0.0);
    drawLine(columnWidth, 1.0);

    if (drawDiagonals) {
      moveTo(1.0 - columnWidth, 1.0 - ROW_SIZE);
      drawLine(1.0, 1.0 - rowHeight - ROW_SIZE);
    }
  }
}
