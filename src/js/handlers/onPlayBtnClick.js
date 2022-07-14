export { onBtnPlayClick };
import trailerMarkup from '../templates/traillerMarkup';

function onBtnPlayClick(e) {
  const backdropEl = document.querySelector('.backdrop');
  const modalEl = document.querySelector('.modal');
  const modalCardEl = document.querySelector('.modal__card');
  if (e.target.classList.contains('modal__btn-play')) {
    const key = e.target.getAttribute('id');
    const markup = trailerMarkup(key);
    modalEl.insertAdjacentHTML('afterbegin', markup);
    modalCardEl.classList.add('is-hidden');
    const modalVideoEl = document.querySelector('.modal__video');
    modalVideoEl.classList.remove('is-hidden');
    modalEl.style.backgroundColor = 'transparent';
    backdropEl.addEventListener('click', onBtnCloseTrailer);
    document.addEventListener('keydown', onCloseTrailerEsc);
  }
}

function closeTrailer() {
  const modalVideoEl = document.querySelector('.modal__video');
  modalVideoEl.remove();
  const modalCardEl = document.querySelector('.modal__card');
  const modalEl = document.querySelector('.modal');
  modalEl.style.backgroundColor = 'var(--main-bg)';
  modalCardEl.classList.remove('is-hidden');
  const backdropEl = document.querySelector('.backdrop');
  backdropEl.removeEventListener('click', onBtnCloseTrailer);
  document.removeEventListener('keydown', onCloseTrailerEsc);
}

function onBtnCloseTrailer(e) {
  if (
    e.target.classList.contains('modal__btn-close-trailer') ||
    e.currentTarget === e.target
  ) {
    closeTrailer();
  }
}

function onCloseTrailerEsc(e) {
  const modalCardEl = document.querySelector('.modal__card');
  if (e.code === 'Escape' && modalCardEl.classList.contains('is-hidden')) {
    closeTrailer();
  }
}
