// В HTML есть пустой список ul#ingredients.
// В JS есть массив строк.
// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию
// в список ul.ingredients.Для создания DOM - узлов используй
// document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.getElementById('ingredients')

const ingredientsElements = ingredients.map(ingredient => {
    const ingredientsElement = document.createElement('li')
    ingredientsElement.textContent = ingredient
    return ingredientsElement
})

ingredientsList.append(...ingredientsElements)