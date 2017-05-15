export const CANVAS = document.getElementById('grid_canvas');
export const CONTEXT = CANVAS.getContext('2d');

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

export function drawTable(rows, columns, drawDiagonals) {
  const rowSize = 1.0 / rows;
  const columnSize = 1.0 / columns;

  for (let row = 1; row < rows; row += 1) {
    const rowHeight = row * rowSize;
    const columnWidth = row * columnSize;

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
    const rowHeight = (column) * rowSize;
    const columnWidth = column * columnSize;

    moveTo(columnWidth, 0.0);
    drawLine(columnWidth, 1.0);

    if (drawDiagonals) {
      moveTo(1.0 - columnWidth, 1.0 - rowSize);
      drawLine(1.0, 1.0 - rowHeight - rowSize);
    }
  }
}
