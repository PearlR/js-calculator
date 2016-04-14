var backgroundNumber = ''
var foregroundNumber = ''
var currentOperator = ''

function clearButton () {
  backgroundNumber = ''
  foregroundNumber = ''
  currentOperator = ''
  setOnscreenNumber(foregroundNumber)
}

function clearEntryButton () {
  if (foregroundNumber.length > 0)
    foregroundNumber = foregroundNumber.slice(0, foregroundNumber.length - 1)
  setOnscreenNumber(foregroundNumber)
}

function numberButton (number) {
  foregroundNumber += number
  setOnscreenNumber(foregroundNumber)
}

function pointButton () {
  if (!foregroundNumber.includes('.')) {
    if (foregroundNumber === '')
      foregroundNumber += 0
    foregroundNumber += '.'
  }
  setOnscreenNumber(foregroundNumber)
}

function operatorButton (operator) {
  backgroundNumber = (currentOperator !== '') ? evaluate() : foregroundNumber
  foregroundNumber = ''
  currentOperator = operator
  setOnscreenNumber(backgroundNumber)
}

function evaluate () {
  return eval(evalSafe(backgroundNumber) + currentOperator + evalSafe(foregroundNumber))
}

function evalSafe (number) {
  return (number === '' || number[number.length - 1] === '.') ? number + '0' : number
}

function equalsButton () {
  if (currentOperator !== '') {
    backgroundNumber = evaluate()
    foregroundNumber = ''
    setOnscreenNumber(backgroundNumber)
  }
}

function setOnscreenNumber (number) {
  document.getElementById('onscreen').innerHTML = evalSafe(number)
}
