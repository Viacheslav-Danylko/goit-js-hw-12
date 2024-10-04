import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from './js/pixabay-api';
import { renderImages, showLoader, hideLoader, showMore, hideMore } from './js/render-functions';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
let lightbox = null;
let page = 1;
const pagePer = 15;
const loadBtn = document.querySelector('.load-more');
let currentQuery = '';  // Нова змінна для збереження пошукового запиту

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const inputValue = form.elements.query.value.trim().toLowerCase();
  if (inputValue === '') {
    showErrorToast('Sorry, there are no images matching your search query. Please try again!');
    return;
  }

  gallery.innerHTML = '';
  form.elements.query.value = '';  // Очищення поля введення
  page = 1;
  currentQuery = inputValue;  // Збереження запиту в змінну

  try {
    showLoader();
    const images = await fetchImages(currentQuery, page, pagePer);
    renderImages(images);
    lightbox = new SimpleLightbox('.gallery a').refresh();
    hideLoader();
    toggleLoadMore(images.hits.length, images.totalHits);
  } catch (error) {
    hideLoader();
    showErrorToast('Something went wrong. Please try again!');
  }
});

loadBtn.addEventListener('click', async () => {
  page += 1;
  try {
    showLoader();
    const images = await fetchImages(currentQuery, page, pagePer);
    if (images.hits.length === 0) {
      showInfoToast('No more images found.');
      hideLoader();
      return;
    }
    renderImages(images);
    lightbox.refresh();
    hideLoader();
    toggleLoadMore(images.hits.length, images.totalHits);
    smoothScroll();  // Прокрутка після підгрузки
  } catch (error) {
    hideLoader();
    showErrorToast('Error loading images. Please try again!');
  }
});

function smoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.gallery-query')
    .getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

function toggleLoadMore(currentHits, totalHits) {
  if (currentHits >= pagePer && page * pagePer < totalHits) {
    showMore();
  } else {
    hideMore();
  }
}

// Функції для показу повідомлень (iZiToast)
function showErrorToast(message) {
  iziToast.error({
    title: '',
    message: message,
    position: 'topRight',
    backgroundColor: '#EF4040',
    maxWidth: '432px',
    messageColor: '#fff',
    iconColor: '#fff'
  });
}

function showInfoToast(message) {
  iziToast.info({
    title: '',
    message: message,
    position: 'topRight',
    backgroundColor: '#2196F3',
    maxWidth: '432px',
    messageColor: '#fff',
    iconColor: '#fff'
  });
}