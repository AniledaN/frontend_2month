// Задание №1
function findMin(a, b) {
  if (a < b) {
    return a
  } else {
    return b
  }
}
console.log(findMin(588, 1000));

// Задание №2
let input = prompt("Введите строку: ")

function getStrLen(str) {
  return str.length
}
console.log(getStrLen(input))

// Задание №3
function calculator(operation, num1, num2) {
  let result
  if (operation === '+') {
    result = num1 + num2;
  } else if (operation === '-') {
    result = num1 - num2;
  } else if (operation === '*') {
    result = num1 * num2;
  } else if (operation === '/') {
    if (num2 === 0) {
      console.log("Ошибка! На 0 делить нельзя!")
      return
    }
    result = num1 / num2;
  } else {
    console.log("Ошибка! Неверная операция!")
    return
  }
  console.log(`Результат: ${result}`)
}

calculator('/', 88, 5)

