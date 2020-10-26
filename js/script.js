// Разбиваем задание на подзадачи:

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image.Это необходимо для того,
//   чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

import galleryItems from "./gallery-items.js"

const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const btn = document.querySelector('.lightbox__button');
const img = document.querySelector('.lightbox__image');


galleryItems.forEach(el => {
  gallery.insertAdjacentHTML('beforeend',
      `<li class="gallery__item">
  <a
    class="gallery__link"
    href=${el.original}
  >
    <img
      class="gallery__image"
      src=${el.preview}
      data-source=${el.original}
      alt='${el.description}'
    />
  </a>
</li>`);
});

gallery.addEventListener('click', e => {
  e.preventDefault();
  lightbox.classList.add('is-open');
  img.src = e.target.dataset.source;
})


btn.addEventListener('click', () => {
  lightbox.classList.remove('is-open');
  img.src = "";
})



