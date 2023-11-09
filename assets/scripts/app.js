const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription)
} 

function writeToLog(
    operatoinIdentifier, 
    prevResult, 
    operationNumber, 
    newResult
    ) {
    const logEntry = {
        operation: operatoinIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry)
    console.log(logEntries)

}

function add() {
    const enteredNumber = +userInput.value
    const initialResult = currentResult;
    const calcDescription = `${currentResult} + ${enteredNumber}`
    currentResult = currentResult + +enteredNumber;
    outputResult(currentResult, calcDescription);
    writeToLog('add', initialResult, enteredNumber, currentResult)

}

function subtract() {
    const enteredNumber = +userInput.value;
    const calcDescription = `${currentResult} - ${enteredNumber}`;
    currentResult = currentResult - enteredNumber;
    outputResult(currentResult, calcDescription);

   
}

function multiply() {
    const enteredNumber = +userInput.value
    const calcDescription = `${currentResult} * ${enteredNumber}`
    currentResult = currentResult * enteredNumber;
    outputResult(currentResult, calcDescription);
}

function divide() {
    const enteredNumber = +userInput.value
    const calcDescription = `${currentResult} / ${enteredNumber}`
    currentResult = currentResult / enteredNumber;
    outputResult(currentResult, calcDescription);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

