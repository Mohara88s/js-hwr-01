// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через 
// css - классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// варіант без шаблонних строк
// const galleryList = document.getElementById('gallery')
// const imagesList = images.map(image => {
//     const listEl = document.createElement('li')
//     listEl.classList.add('gallery__item')
//     const imageEl = document.createElement('img')
//     imageEl.classList.add('gallery__pic')
//     imageEl.setAttribute('src', image.url)
//     imageEl.setAttribute('alt', image.alt)
//     listEl.appendChild(imageEl)
//     return listEl
// })
// galleryList.append(...imagesList)


// варіант з шаблонними строками
const galleryList = document.getElementById('gallery')
const imagesList = images.map(image => {
    return `<li class=gallery__item><img class=gallery__pic src=${image.url} alt=${image.alt}></li>`
}).join(' ')

galleryList.insertAdjacentHTML("beforeend",imagesList)