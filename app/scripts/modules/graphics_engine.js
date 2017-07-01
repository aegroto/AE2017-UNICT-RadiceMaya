import {
    setErrorText,
    setInfoText,
} from './graphics_utils';

import {
    drawTable,
    clearRow,
    setNumberOnRow,
} from './canvas';

import {
    calculateStepsOnNumber,
    calculateSquareLength,
} from './calculus';

let INPUT = 0;

let STEPS = {};
let CURRENT_STEP = 0;

export const elaborateInput = function elaborateInput() {
    INPUT = $('#input_textfield').val();

    let irregularInput = false;
    if (isNaN(INPUT)) {
        setErrorText("L'input non è un numero e per tanto non esiste la sua radice quadrata.");
        return;
    } if (INPUT === '0') {
        INPUT = 4;

        setErrorText("L'input è nullo (metti l'algoritmo alla prova con qualcosa di più complesso...)");
        return;
    }

    if (INPUT < 0) {
        INPUT = -INPUT;

        setErrorText("L'input è un numero negativo e per tanto non esiste una sua radice quadrata intera.");
        return;
    }

    if (Math.abs(INPUT) > Number.MAX_SAFE_INTEGER) {
        INPUT = Number.MAX_SAFE_INTEGER;

        irregularInput = true;
        setErrorText("L'input superava la soglia massima e per tanto i risultati potrebbero non essere quelli previsti.");
    }

    if (!irregularInput) {
        setErrorText('');
    }

    drawTable(3, calculateSquareLength(INPUT), true);

    setNumberOnRow(0, INPUT);

    setInfoText(`Calcolo la radice quadrata di ${INPUT}`);

    STEPS = calculateStepsOnNumber(INPUT);

    /* console.log('Steps: ');
    for (let i = 0; i < STEPS.length; i++) {
        console.log(`${i} = ${STEPS[i].firstRow}, ${STEPS[i].secondRow}, ${STEPS[i].thirdRow}`);
    } */

    CURRENT_STEP = 0;
};

function drawTableOnStep(step) {
    setInfoText(`Step ${step} su ${STEPS.length}`);
    const stepData = STEPS[step];

    // console.log(stepData);

    setNumberOnRow(0, stepData.firstRow);
    setNumberOnRow(1, stepData.secondRow);
    setNumberOnRow(2, stepData.thirdRow);
}

function clearTableOnStep(step) {
    if (step >= 0) {
        const stepData = STEPS[step];

        clearRow(0, stepData.firstRow);
        clearRow(1, stepData.secondRow);
        clearRow(2, stepData.thirdRow);
    } /* else {
        clearRow(0, INPUT);
    } */
}

export const nextStep = function nextStep() {
    if (CURRENT_STEP < STEPS.length - 1) {
        clearTableOnStep(CURRENT_STEP);
        drawTableOnStep(++CURRENT_STEP);
    } else {
        setInfoText(`Terminato! il risultato è ${STEPS[CURRENT_STEP].thirdRow}, resto: ${STEPS[CURRENT_STEP].firstRow}`);
    }
};

export const previousStep = function previousStep() {
    if (CURRENT_STEP > 1) {
        clearTableOnStep(CURRENT_STEP);
        drawTableOnStep(--CURRENT_STEP);
    }
};
