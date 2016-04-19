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
  var display = evalSafe(number)
  document.getElementById('onscreen').innerHTML = display
  easterEggs(display)
}

function easterEggs (display) {
  switch (display) {
    case '07734': // HELLO
      document.getElementById('background').style['background-image'] = "url('photos/hello.jpg')"
      break
    case '8008': // BOOB
    case '58008': // BOOBS
    case '55378008': // BOOBLESS
      document.getElementById('background').style['background-image'] = "url('http://reactiongifs.me/wp-content/uploads/2013/09/no-no-no-very-bad-man-Babu-Bhatt-seinfeld-gifs-finger-wag.gif')"
      break
    case '3045': // SHOE
    case '53045': // SHOES
      document.getElementById('background').style['background-image'] = "url('photos/shoes.jpg')"
      break
    case '55373045': // SHOELESS
      document.getElementById('background').style['background-image'] = "url('photos/shoeless.jpg')"
      break
    case '450640': // OHGOSH
      document.getElementById('background').style['background-image'] = "url('http://media3.popsugar-assets.com/files/2013/04/17/043/n/1922507/37c0e5ce5357b95e_original-4.xxxlarge/i/BLIMEY-WHAT-EARTH-Face.gif')"
      break
    case '002': // ZOO
      document.getElementById('background').style['background-image'] = "url('https://i.ytimg.com/vi/tHqNsMIJ69s/maxresdefault.jpg')"
      break
    default:
      document.getElementById('background').style['background-image'] = ''
      document.getElementById('background').style['background-color'] = getRandomColor()
  }
}

function getRandomColor () {
  var letters = '0123456789ABCDEF'.split('')
  var color = '#'
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * letters.length)]
  }
  return color
}
