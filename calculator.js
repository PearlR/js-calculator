var backgroundNumber = ''
var foregroundNumber = ''
var currentOperator = ''

function clearButton () {
  backgroundNumber = ''
  foregroundNumber = ''
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
  if (!foregroundNumber.includes('.'))
    foregroundNumber += '.'
  setOnscreenNumber(foregroundNumber + '0')
}

function operatorButton (operator) {
  if (currentOperator !== '')
    evaluate()
  currentOperator = operator
}

function evaluate () {
  backgroundNumber = eval(evalSafe(backgroundNumber) + operator + evalSafe(foregroundNumber))
  foregroundNumber = ''
  setOnscreenNumber(backgroundNumber)
}

function evalSafe (number) {
  return (number.length === 0 || number[number.length - 1] === '.') ? number + '0' : number
}

function equalsButton () {

}

function setOnscreenNumber (number) {
  document.getElementById('onscreen').innerHTML = number
}
