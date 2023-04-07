let grade = Number(prompt('Оцените сервис от 1 до 10:'));

if (grade >= 5 && grade <= 10) {
    alert('Спасибо за высокую оценку!')
} else if (grade < 5) {
    alert('Мы работаем над улучшением сервиса!')
} else {
    alert('Только цифры от 1 до 10!')
}


let days = prompt('выберите язык: ENG или RUS')

if (days === 'ENG' || days === 'eng') {
    console.log(arr = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'])
} else if (days === 'RUS' || days === 'rus') {
    console.log(arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'])
} else {
    alert('Неверное значение!')
}


switch (days) {
    case 'ENG':
    case 'eng':
        console.log(arr = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'])
        break
    case 'RUS':
    case 'rus':
        console.log(arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'])
        break
    default:
       alert('Неверное значение!')
}