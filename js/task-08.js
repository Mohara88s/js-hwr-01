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
    boxes.createBoxes(Number.parseInt(inputField.value))
}

function onDestroyButtonClick() {
    boxes.destroyBoxes()
}

renderButton.addEventListener('click', onRenderButtonClick)
destroyButton.addEventListener('click', onDestroyButtonClick)

const boxes = {
    counter: 0,
    
    createBoxes(amount) {
        const boxesArray = []
              
        for (let i = 0; i < amount; i++) {
            boxesArray.push(document.createElement('div'))
            boxesArray[i].style.width = this.counter * 10 + 30 + 'px'
            boxesArray[i].style.height = this.counter * 10 + 30 + 'px'
            boxesArray[i].style.backgroundColor = 'rgb(' + getRandomInt(255) + ',' + getRandomInt(255) + ',' + getRandomInt(255) + ')'
            this.counter +=1
        }
        boxesDiv.append(...boxesArray)
    },

    destroyBoxes() {
        boxesDiv.innerHTML = ''
        this.counter = 0
    }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}