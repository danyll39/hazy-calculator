const operators = ['+', '-', '*', '/']

const isStringNumberOrIsANumber = (calcSteps) => {
  return !isNaN(calcSteps) && calcSteps !== ''
}
const isOperand = (calcSteps) => {
  return operators.includes(calcSteps)
}
const calculateUpdatedArray = ([num1, operators, num2]) => {
  switch (operators) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      return num1 / num2

    default: return NaN
  }
}
const calculate = (calcSteps) => {
  const newString = []

  for (let i = 0; i < calcSteps.length; i++) {
    if (isStringNumberOrIsANumber(calcSteps[i])) {
      newString.push(Number(calcSteps[i]))
    } else if (isOperand(calcSteps[i])) {
      newString.push(calcSteps[i])
    }
  }

  return calculateUpdatedArray(newString)
}

module.exports = calculate









