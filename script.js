var displayScreen = document.getElementById("displayScreen")
var btn = document.getElementsByClassName("btns")
var firstValue = []
var addOperatorActive = false
var subOperatorActive = false
var divOperatorActive = false
var multiplyOperatorActive = false

function displayNum(val) {

    displayScreen.innerText = displayScreen.innerText + val

}
function addOperator() {

    firstValue.push(displayScreen.innerText)
    displayScreen.innerText = ""
    addOperatorActive = true

}
function addOperation(secondValue) {

    var num1 = parseFloat(firstValue[0])
    var num2 = parseFloat(secondValue)

    sum = num1 + num2
    addOperatorActive = false
    return sum
}

function subOperator() {

    firstValue.push(displayScreen.innerText)
    displayScreen.innerText = ""
    subOperatorActive = true

}
function subOperation(secondValue) {

    var num1 = parseFloat(firstValue[0])
    var num2 = parseFloat(secondValue)

    sub = num1 - num2
    subOperatorActive = false
    return sub

}
function multiplyOperator() {

    firstValue.push(displayScreen.innerText)
    displayScreen.innerText = ""
    multiplyOperatorActive = true

}
function multiplyOperation(secondValue) {

    var num1 = parseFloat(firstValue[0])
    var num2 = parseFloat(secondValue)

    product = num1 * num2
    multiplyOperatorActive = false
    return product

}
function divOperator() {

    firstValue.push(displayScreen.innerText)
    displayScreen.innerText = ""
    divOperatorActive = true

}
function divOperation(secondValue) {

    var num1 = parseFloat(firstValue[0])
    var num2 = parseFloat(secondValue)

    divide = num1 / num2
    multiplyOperatorActive = false
    return divide

}

function equalOperator() {    
    var secondNumber = displayScreen.innerText

    if (addOperatorActive == true) {
        var result = addOperation(secondNumber)
        displayScreen.innerText = result
        firstValue.pop()
        firstValue[0] = result
    }
    else if (subOperatorActive == true) {
        var result = subOperation(secondNumber)
        displayScreen.innerText = result
        firstValue.pop()
        firstValue[0] = result
    }
    else if (multiplyOperatorActive == true) {
        var result = multiplyOperation(secondNumber)
        displayScreen.innerText = result
        firstValue.pop()
        firstValue[0] = result
    }
    else if (divOperatorActive == true) {
        var result = divOperation(secondNumber)
        displayScreen.innerText = result
        firstValue.pop()
        firstValue[0] = result
    }
}

function delOperator() {
    displayScreen.innerText = displayScreen.innerText.substring(0, displayScreen.innerText.length - 1)
    // firstValue[0] = displayScreen.innerText
}

function clearAll() {
    displayScreen.innerText = ""
    firstValue.pop()
}