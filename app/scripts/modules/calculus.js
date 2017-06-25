export function calculateSquareLength(num) {
  return Math.ceil((Math.floor(Math.log10(num) + 1)) / 2);
}

export function calculateStepsOnNumber(num) {
    const stepData = {
        firstRow: 0,
        secondRow: 0,
        thirdRow: 0,
    };

    const stepArray = [];
    let square = 0;
    const squareLength = calculateSquareLength(num);

    for (let i = squareLength - 1; i >= 0; i -= 1) {
        let partial = (2 * square * Math.pow(10, i)) + Math.pow(10, 2 * i);

        stepData.firstRow = num;
        stepData.secondRow = partial;
        stepData.thirdRow = square;
        stepArray.push(stepData);

        while (num > partial) {
            num -= partial;
            square += Math.pow(10, i);
            stepData.firstRow = num;
            stepData.secondRow = partial;
            stepData.thirdRow = square;
            stepArray.push(stepData);
            partial += 2 * Math.pow(10, 2 * i);
        }
    }

  return stepArray;
}
