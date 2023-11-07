const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    const currentResult = currentResult + userInput.value;
    outputReslut("currentResult", '');
}

addBtn.addEventListner('click', add)
