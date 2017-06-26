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
    if (INPUT === '0') {
      INPUT = 4;

      irregularInput = true;
      setErrorText("L'input era nullo e per tanto i risultati potrebbero non essere quelli previsti.");
    }

    if (INPUT < 0) {
        INPUT = -INPUT;

        irregularInput = true;
        setErrorText("L'input era un numero negativo e per tanto i risultati potrebbero non essere quelli previsti.");
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

    CURRENT_STEP = -1;
};

function drawTableOnStep(step) {
    setInfoText(`Step ${step} su ${STEPS.length}`);
    const stepData = STEPS[step];

    console.log(stepData);

    setNumberOnRow(0, stepData.firstRow);
    setNumberOnRow(1, stepData.secondRow);
    setNumberOnRow(2, stepData.thirdRow);
}

function clearTableOnStep(step) {
    if (step > -1) {
        const stepData = STEPS[step];

        clearRow(0, stepData.firstRow);
        clearRow(1, stepData.secondRow);
        clearRow(2, stepData.thirdRow);
    } else {
        clearRow(0, INPUT);
    }
}

export const nextStep = function nextStep() {
    if (CURRENT_STEP < STEPS.length - 1) {
        clearTableOnStep(CURRENT_STEP);
        drawTableOnStep(++CURRENT_STEP);
    } else {
        setInfoText(`Terminato! il risultato è ${STEPS[CURRENT_STEP].thirdRow}`);
    }
};

export const previousStep = function previousStep() {
    if (CURRENT_STEP > 0) {
        clearTableOnStep(CURRENT_STEP);
        drawTableOnStep(--CURRENT_STEP);
    }
};
