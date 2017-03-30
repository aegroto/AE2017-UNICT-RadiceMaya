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

export function drawTable(rows, columns) {
  const totalRows = rows + columns;
  const size = 1.0 / totalRows;

  for (let row = 0; row < totalRows; row += 1) {
    moveTo(0.0, row * size);
    drawLine(row * size, 1.0);
  }
}
