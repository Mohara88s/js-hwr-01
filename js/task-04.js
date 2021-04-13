// Счетчик состоит из спана и кнопок, которые должны увеличивать
// и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее
// значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения
// значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление
// интерфейса

const counterValue = {
    value: 0,
    
    increment() {
        this.value += 1
        // console.log(this.value)
    },
    
    decrement() {
        this.value -= 1
        // console.log(this.value)
    }
}

const incrementButton = document.querySelector('button[data-action="increment"]')
const decrementButton = document.querySelector('button[data-action="decrement"]')
const valueField = document.getElementById('value')

function onIncrementButtonClick() {
    counterValue.increment()
    valueField.textContent = counterValue.value
}
function onDecrementButtonClick() {
    counterValue.decrement()
    valueField.textContent = counterValue.value
}

incrementButton.addEventListener('click', onIncrementButtonClick)
decrementButton.addEventListener('click', onDecrementButtonClick)
