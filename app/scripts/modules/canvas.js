export const CANVAS = document.getElementById('grid_canvas');
export const CONTEXT = CANVAS.getContext('2d');

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

/* export function setNumberOnRow(row, number) {

} */

export function drawTable(rows, columns, drawDiagonals) {
  ROW_SIZE = 1.0 / rows;
  COLUMN_SIZE = 1.0 / columns;

  CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);
  CONTEXT.beginPath();

  for (let row = 1; row < rows; row += 1) {
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
