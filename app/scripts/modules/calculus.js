function StepData(_firstRow, _secondRow, _thirdRow) {
    this.firstRow = _firstRow;
    this.secondRow = _secondRow;
    this.thirdRow = _thirdRow;
}

export function calculateSquareLength(num) {
  return Math.ceil((Math.floor(Math.log10(num) + 1)) / 2);
}

export function calculateStepsOnNumber(num) {
    const stepArray = [];
    let square = 0;
    const squareLength = calculateSquareLength(num);

    for (let i = squareLength - 1; i >= 0; i -= 1) {
        let partial = (2 * square * Math.pow(10, i)) + Math.pow(10, 2 * i);

        const tempStepData = new StepData();

        tempStepData.firstRow = num;
        tempStepData.secondRow = partial;
        tempStepData.thirdRow = square;
        stepArray.push(new StepData(tempStepData.firstRow, tempStepData.secondRow, tempStepData.thirdRow));

        while (num >= partial) {
            num -= partial;
            square += Math.pow(10, i);

            partial += 2 * Math.pow(10, 2 * i);
            tempStepData.firstRow = num;
            tempStepData.secondRow = partial;
            tempStepData.thirdRow = square;

            stepArray.push(new StepData(tempStepData.firstRow, tempStepData.secondRow, tempStepData.thirdRow));
        }
    }

    return stepArray;
}

