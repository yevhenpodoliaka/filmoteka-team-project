export { openModal, closeModal };
import { onBtnPlayClick } from './onPlayBtnClick';
import {
  onBtnAddToQueueClick,
  onBtnAddWachedClick,
} from './localStorageOptions';
// // знімає is.hidden з refs.backdrop та додає слухачів

function openModal() {
  const backdropEl = document.querySelector('.backdrop');
  backdropEl.classList.remove('is-hidden');
  document.addEventListener('keydown', onCloseEsc);
  backdropEl.addEventListener('click', onBtnCloseModalClick);
  backdropEl.addEventListener('click', onBtnAddToQueueClick);
  backdropEl.addEventListener('click', onBtnAddWachedClick);
  backdropEl.addEventListener('click', onBtnPlayClick);
  document.body.addEventListener('wheel', preventScroll, { passive: false });
}
// //додає is.hidden на refs.backdrop та знімає слухачів
function closeModal() {
  const backdropEl = document.querySelector('.backdrop');
  backdropEl.classList.add('is-hidden');
  document.removeEventListener('keydown', onCloseEsc);
  backdropEl.removeEventListener('click', onBtnCloseModalClick);
  backdropEl.removeEventListener('click', onBtnAddToQueueClick);
  backdropEl.removeEventListener('click', onBtnAddWachedClick);
  backdropEl.removeEventListener('click', onBtnPlayClick);
  document.body.removeEventListener('wheel', preventScroll, { passive: false });
}

// // закриття по Esc
function onCloseEsc(e) {
  const modalCardEl = document.querySelector('.modal__card');
  if (e.code === 'Escape' && !modalCardEl.classList.contains('is-hidden')) {
    closeModal();
  }
}
// // закриття по кнопкі або по кліку на бeкдроп
function onBtnCloseModalClick(e) {
  const modalCardEl = document.querySelector('.modal__card');
  if (
    e.target.dataset.action === 'close-modal' &&
    !modalCardEl.classList.contains('is-hidden')
  ) {
    closeModal();
  }
  if (
    e.currentTarget === e.target &&
    !modalCardEl.classList.contains('is-hidden')
  ) {
    closeModal();
  }
}

function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}
