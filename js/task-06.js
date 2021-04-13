// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его
// атрибуте data - length.
// Если введено подходящее количество, то border инпута
// становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputField = document.getElementById('validation-input')

function onInputFieldBlur() {
    inputField.setAttribute('class', Number.parseInt(inputField.getAttribute('data-length')) === inputField.value.length ? 'valid':'invalid')
}

inputField.addEventListener('blur', onInputFieldBlur)