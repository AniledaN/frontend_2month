// Задание №1
let num = [10, 20, 30, 50, 235, 3000]

num.forEach(function(number) {
  let firstNum = number.toString()[0]
  if (firstNum === '1' || firstNum === '2' || firstNum === '5') {
    console.log(number)
  }
});

// Задание №2
for (let i = 20; i >= 0; i--) {
  console.log(i);
}

// Задание №3
let color = prompt('Введите цвет светофора', '').toLowerCase();
let message;
let colors = {
  'красный': 'Стоп!',
  'желтый': 'Приготовьтесь!',
  'зеленый': 'Езжайте!'
}

if (colors[color]) {
  message = colors[color];
} else {
  message = 'Вводите только цвета светофора! (красный, желтый или зеленый)';
}
alert(message);

// Задание №4
let arr = [];
for (let i = 0; i <= 10; i++) {
  arr.push(i);
}
console.log(arr);

