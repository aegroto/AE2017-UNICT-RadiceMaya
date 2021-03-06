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
    let imgY = row * cy(ROW_SIZE) + cy(0.1 + 0.005 * (COLUMNS)) - (cy(0.1) * (digit % 2));
    let imgSize = 0;

    if (ROWS > COLUMNS) {
        imgY += cy(0.0175);
        imgSize = cy(ROW_SIZE / 3);
    } else {
        imgSize = cx(COLUMN_SIZE / 4.5);
    }

    img.onload = function load() {
        CONTEXT.drawImage(this, imgX, imgY, imgSize, imgSize);
    };
}

export function clearRow(row, currentNumber) {
    let i = 0;

    do {
        drawDigit(row, i++, `clear_${currentNumber % 10}`);
        currentNumber = Math.floor(currentNumber / 10);
    } while (currentNumber > 0);
}

export function setNumberOnRow(row, number) {
    let i = 0;

    do {
        drawDigit(row, i++, number % 10);
        number = Math.floor(number / 10);
    } while (number > 0);
}

function drawDigitLinearly(row, digit, value) {
    const img = new Image();
    img.src = `images/${value}.png`;

    moveTo(0.0, 0.0);

    const imgX = cx(1.0 - (COLUMN_SIZE / 2.0 * (digit * 2 + 1)));
    const imgY = cy(ROW_SIZE / 2.0 * (row * 2 + 1));
    let imgSize = 0;

    if (ROWS > COLUMNS) {
        imgSize = cy(ROW_SIZE / 3);
    } else {
        imgSize = cx(COLUMN_SIZE / 4.5);
    }

    img.onload = function load() {
        CONTEXT.drawImage(this, imgX - imgSize / 2.0, imgY - imgSize / 2.0, imgSize, imgSize);
    };
}

export function setNumberOnRowLinearly(row, number) {
    let i = 0;
    do {
        drawDigitLinearly(row, i++, number % 10);
        number = Math.floor(number / 10);
    } while (number > 0);
}

export function clearRowLinearly(row, currentNumber) {
    let i = 0;
    do {
        drawDigitLinearly(row, i++, `clear_${currentNumber % 10}`);
        currentNumber = Math.floor(currentNumber / 10);
    } while (currentNumber > 0);
}

export function drawTable(rows, columns, drawDiagonals) {
    ROWS = rows;
    COLUMNS = columns;

    ROW_SIZE = 1.0 / rows;
    COLUMN_SIZE = 1.0 / columns;

    CONTEXT.fillStyle = '#FFFFFF';
    CONTEXT.fillRect(0, 0, CANVAS.width, CANVAS.height);
    CONTEXT.beginPath();

    CONTEXT.fillStyle = '#000';

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
