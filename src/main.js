import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from './js/pixabay-api';
import { renderImages, showLoader, hideLoader } from './js/render-functions';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
let lightbox = null;
let page = 1;
const pagePer = 15;
const loadMore = document.querySelector('.load-more');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const inputValue = form.elements.query.value.trim().toLowerCase();
  if (inputValue === '') {
    iziToast.error({
      title: '',
      message: 'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      backgroundColor: '#EF4040',
      maxWidth: '432px',
      messageColor: '#fff',
      iconColor: '#fff'
    });

    return;
  };

  gallery.innerHTML = '';
  page = 1;

  try {
    showLoader();
    const images = await fetchImages(inputValue, page, pagePer);
    renderImages(images);
    lightbox = new SimpleLightbox('.gallery a').refresh();
    hideLoader();

    if (images.hits.length >= pagePer) {
      showMore();
    } else {
      hideMore();
    }
    if (images.totalHits === 0) {
      hideLoader();
      iziToast.warning({
        title: '',
        message: 'No images matching your search query. Please try again!',
        position: 'topRight',
        backgroundColor: '#EF4040',
        maxWidth: '432px',
        messageColor: '#fff',
        iconColor: '#fff'
      });
    }
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: '',
      message: 'Something went wrong. Please try again!',
      position: 'topRight',
      backgroundColor: '#EF4040',
      maxWidth: '432px',
      messageColor: '#fff',
      iconColor: '#fff'
    });
  };
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

loadMore.addEventListener('click', async () => {
  page += 1;
  const inputValue = form.elements.query.value.trim().toLowerCase();
  try {
    showLoader();
    const images = await fetchImages(inputValue, page, pagePer);
    renderImages(images);
    lightbox.refresh();
    hideLoader();

    if (images.hits.length < pagePer) {
      hideMore();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        backgroundColor: '#2196F3',
        maxWidth: '432px',
        messageColor: '#fff',
        iconColor: '#fff'
      });
    }
  } catch (error) {
    console.log(error);
    iziToast.error({
      message: 'Something went wrong. Please try again!',
      position: 'topRight',
      backgroundColor: '#EF4040',
      maxWidth: '432px',
      messageColor: '#fff',
      iconColor: '#fff'
    });
  }
});