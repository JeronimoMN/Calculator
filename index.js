class Result {
    constructor() {
        this.value = ''
        this.operator = ''
        this.historial = []
    }

    logOperation(operation, result, event) {
        this.historial.push({ operation, result, event })
    }

    getHistory() {
        return this.historial
    }
}

function initCalculator() {
    const rs = new Result()

    const resultElement = document.getElementById('result')
    const numbers = document.querySelectorAll(".number")
    const operators = document.querySelectorAll(".operator")
    const cleanDisplay = document.querySelector(".clean")
    const equal = document.querySelector(".equal")
    const historyButtom = document.querySelector('.history')

    numbers.forEach((key) => {
        key.addEventListener("click", (event) => {
            rs.value += event.target.value
            resultElement.textContent = rs.value
        })
    })

    operators.forEach((key) => {
        key.addEventListener("click", (event) => {
            rs.value += event.target.value;
            resultElement.textContent = rs.value
        })
    })

    cleanDisplay.addEventListener("click", e => {
        clean(rs)
    })

    // Perform Calculation and log history
    equal.addEventListener("click", e => {

        /*
       Save: Operation, Result and Event
       */

        const operation = rs.value;
        operate(rs)
        rs.logOperation(operation, rs.value, e.target.className)
        resultElement.textContent = rs.value
    })


    // Display history in the console
    historyButtom.addEventListener('click', (e) => {
        console.log('History:', JSON.stringify(rs.getHistory(), null, 2))
    })

}


/*
    Get Result
    Convert an string into substrings using an separator
    Problem inside of the function: The code repeat itself in each conditional- How can i improve it?
*/

function operate(rs) {
    if (rs.value.includes("+")) {
        let exprArr = rs.value.split('+')
        let a = parseInt(exprArr[0])
        let b = parseInt(exprArr[1])
        sumNumbers(a, b, rs)
    } else if (rs.value.includes("-")) {
        let exprArr = rs.value.split('-')
        let a = parseInt(exprArr[0])
        let b = parseInt(exprArr[1])
        console.log(a, b)
        subtractNumbers(a, b, rs)
    } else if (rs.value.includes("*")) {
        let exprArr = rs.value.split('*')
        let a = parseInt(exprArr[0])
        let b = parseInt(exprArr[1])
        multiplyNumbers(a, b, rs)
    } else if (rs.value.includes("/")) {
        let exprArr = rs.value.split('/')
        let a = parseInt(exprArr[0])
        let b = parseInt(exprArr[1])
        divideNumbers(a, b, rs)
    }
}

/*
    Clean input
*/

function clean(rs) {
    document.getElementById('result').textContent = ''
    rs.value = ''
}

/*
    Basic Functions
*/
function sumNumbers(number1, number2, rs) {
    clean(rs)
    rs.value += number1 + number2;

}

function subtractNumbers(number1, number2, rs) {
    clean(rs)
    rs.value += number1 - number2
}

function multiplyNumbers(number1, number2, rs) {
    clean(rs)
    rs.value += number1 * number2;
}

function divideNumbers(number1, number2, rs) {
    clean(rs)
    rs.value += number1 / number2;
}


initCalculator()