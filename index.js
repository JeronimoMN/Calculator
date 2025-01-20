class Result {
    constructor() {
        this.value = ''
        this.operator = ''
        this.historial = []
    }
}

function initCalculator(){
    const rs = new Result()

    const resultElement = document.getElementById('result')
    const numbers = document.querySelectorAll(".number")
    const operators = document.querySelectorAll(".operator")
    const cleanDisplay = document.querySelector(".clean")
    const equal = document.querySelector(".equal")
    const history = document.querySelector('.history')

    // const dark = document.getElementById('chgcolor')

    // dark.addEventListener('click', e =>{
    //     document.body.style.backgroundColor = 'black'
    // })

    history.addEventListener('click', e => {
        console.log(rs.historial)

    })

    
    numbers.forEach((key) => {
        key.addEventListener("click", (event) =>{
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

    equal.addEventListener("click", e =>{

        /*
        Save: Operation, Result and Event
        */

        const operation = {}


        operation['operation'] = rs.value
        operate(rs)
        operation['result'] = rs.value
        operation['event'] = e.target.className

        rs.historial.push(operation)
        resultElement.textContent= rs.value
    })

}


/*
    Get Result
    Convert an string into substrings using an separator
*/

function operate(rs){


    if(rs.value.includes("+")){
        let exprArr = rs.value.split('+')
        let a = parseInt( exprArr[0])
        let b = parseInt(exprArr[1])
        sumNumbers(a, b, rs)
    }else if(rs.value.includes("-")){
        let exprArr = rs.value.split('-')
        let a = parseInt( exprArr[0])
        let b = parseInt(exprArr[1])
        console.log(a, b)
        subtractNumbers(a, b, rs)
    }else if(rs.value.includes("*")){
        let exprArr = rs.value.split('*')
        let a = parseInt( exprArr[0])
        let b = parseInt(exprArr[1])
        multiplyNumbers(a, b, rs)
    }else if(rs.value.includes("/")){
        let exprArr = rs.value.split('/')
        let a = parseInt( exprArr[0])
        let b = parseInt(exprArr[1])
        divideNumbers(a, b, rs)
    }
}

/*
    Clean input
*/

function clean(rs){
    document.getElementById('result').textContent = ''
    rs.value = ''
}



/*

BASIC FUNCTIONS

*/
function sumNumbers(number1, number2, rs){
    clean(rs)
    rs.value += number1 + number2;

}

function subtractNumbers(number1, number2, rs){
    clean(rs)
    rs.value += number1 - number2
}

function multiplyNumbers(number1, number2, rs ){
    clean(rs)
    rs.value += number1 * number2;
}

function divideNumbers(number1, number2, rs ){
    clean(rs)
    rs.value += number1 / number2;
}


initCalculator()


