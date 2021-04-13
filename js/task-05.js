// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его
// текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

const inputNameField = document.getElementById('name-input')
const spanNameField = document.getElementById('name-output')

function onInputNameFieldChange(event) {
    spanNameField.textContent = event.currentTarget.value === '' ? 'незнакомец' : event.currentTarget.value  
}

inputNameField.addEventListener('input', onInputNameFieldChange)