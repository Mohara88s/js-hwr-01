// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает
// кнопку Создать, после чего рендерится коллекция.При нажатии
// на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает
// 1 параметр amount - число.Функция создает столько div,
// сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше
// предыдущего на 10px

// Создай функцию destroyBoxes(), которая очищает div#boxes.


const inputField = document.querySelector('#controls input')
const renderButton = document.querySelector('button[data-action="render"]')
const destroyButton = document.querySelector('button[data-action="destroy"]')
const boxesDiv = document.getElementById('boxes')
boxesDiv.style.display = 'flex'
boxesDiv.style.flexWrap = 'wrap'

function onRenderButtonClick() {
       createBoxes(Number.parseInt(inputField.value))
}

function onDestroyButtonClick() {
    destroyBoxes()
}

renderButton.addEventListener('click', onRenderButtonClick)
destroyButton.addEventListener('click', onDestroyButtonClick)

function createBoxes(amount) {
    const boxesArray = []
    for (let i = 0; i < amount; i++) {
        boxesArray.push(document.createElement('div'))
        boxesArray[i].style.width = i * 10 + 30 + 'px'
        boxesArray[i].style.height = i * 10 + 30 + 'px'
        boxesArray[i].style.backgroundColor = 'rgb(' + getRandomInt(255) + ',' + getRandomInt(255) + ',' + getRandomInt(255) + ')'
    }
    boxesDiv.append(...boxesArray)
}


function destroyBoxes() {
boxesDiv.innerHTML = ''
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}