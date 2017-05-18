function elaborate(num) {
	var stepData = {
		firstRow: 0,
		secondRow: 0,
		thirdRow: 0
	};

	var stepArray = [];
	var square = 0;
	var squareLength = squareLength(num);

	for(var i = squareLength - 1; i >= 0; i--) {
			var partial = 2*square*Math.pow(10,i) + Math.pow(10,2*i);

			stepData.firstRow = num;
			stepData.secondRow = partial;
			stepData.thirdRow = square;
			stepArray.push(stepData);

			while(num > partial){
				num -= partial;
				square += Math.pow(10,i);
				stepData.firstRow = num;
				stepData.secondRow = partial;
				stepData.thirdRow = square;
				stepArray.push(stepData);
				partial += 2*Math.pow(10,2*i);
			}
	}
	return stepArray;
}


function squareLength(num) {
	return Math.ceil((Math.floor(Math.log10(num)+1))/2);
}
