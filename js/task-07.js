// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// Врезультате при перетаскивании ползунка будет меняться
// размер текста.

const inputRange = document.getElementById('font-size-control')
const spanText = document.getElementById('text')

function onInputRangeInput() {
    spanText.style.fontSize = inputRange.value + 'px'
}

inputRange.addEventListener('input', onInputRangeInput)