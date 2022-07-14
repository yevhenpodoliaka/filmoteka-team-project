export { onBtnAddToQueueClick, onBtnAddWachedClick };

import { localStorageApi } from '../service/localStorageApi';
import { renderQueueList } from '../templates/renderQueueList';
import { renderWatchedList } from '../templates/renderWatchedList';

function onBtnAddToQueueClick(e) {
  const libraryBtn = document.getElementById('libraryLink');
  if (e.target.dataset.action === 'add-queue') {
    const addToQueue = document.querySelector('.btn-add-queue');
    const addWached = document.querySelector('.btn-add-watched');
    const filmId = e.currentTarget.getAttribute('id');
    if (
      !localStorageApi.isMovieInQueueList(filmId) &&
      !localStorageApi.isMovieInWatchedList(filmId)
    ) {
      localStorageApi.addMovieToQueueList(filmId);
      addToQueue.classList.toggle('isActive');
      addToQueue.textContent = 'delete from queue';
      if (libraryBtn.classList.contains('nav-list__link--current')) {
        const queueStorage = document.getElementById('js-queue');
        if (queueStorage.classList.contains('button-list__btn--current')) {
          renderQueueList();
        }
      }

      return;
    }
    if (localStorageApi.isMovieInQueueList(filmId)) {
      localStorageApi.removeMovieFromQueueList(filmId);
      addToQueue.classList.toggle('isActive');
      addToQueue.textContent = 'add to queue';
      if (libraryBtn.classList.contains('nav-list__link--current')) {
        const queueStorage = document.getElementById('js-queue');
        if (queueStorage.classList.contains('button-list__btn--current')) {
          renderQueueList();
        }
      }

      return;
    }
    if (localStorageApi.isMovieInWatchedList(filmId)) {
      localStorageApi.removeMovieFromWatchedList(filmId);
      addWached.classList.toggle('isActive');
      addWached.textContent = 'add to watched';
      localStorageApi.addMovieToQueueList(filmId);
      addToQueue.classList.toggle('isActive');
      addToQueue.textContent = 'delete from queue';
      if (libraryBtn.classList.contains('nav-list__link--current')) {
        const watchedStorage = document.getElementById('js-watched');
        if (watchedStorage.classList.contains('button-list__btn--current')) {
          renderWatchedList();
        } else {
          renderQueueList();
        }
      }

      return;
    }
  }
}
function onBtnAddWachedClick(e) {
  const libraryBtn = document.getElementById('libraryLink');
  if (e.target.dataset.action === 'add-watched') {
    const addWached = document.querySelector('.btn-add-watched');
    const addToQueue = document.querySelector('.btn-add-queue');
    const filmId = e.currentTarget.getAttribute('id');
    if (
      !localStorageApi.isMovieInWatchedList(filmId) &&
      !localStorageApi.isMovieInQueueList(filmId)
    ) {
      localStorageApi.addMovieToWatchedList(filmId);
      addWached.classList.toggle('isActive');
      addWached.textContent = 'delete from watched';
      if (libraryBtn.classList.contains('nav-list__link--current')) {
        const watchedStorage = document.getElementById('js-watched');
        if (watchedStorage.classList.contains('button-list__btn--current')) {
          renderWatchedList();
        }
      }

      return;
    }
    if (localStorageApi.isMovieInWatchedList(filmId)) {
      localStorageApi.removeMovieFromWatchedList(filmId);
      addWached.classList.toggle('isActive');
      addWached.textContent = 'add to watched';
      if (libraryBtn.classList.contains('nav-list__link--current')) {
        const watchedStorage = document.getElementById('js-watched');
        if (watchedStorage.classList.contains('button-list__btn--current')) {
          renderWatchedList();
        }
      }

      return;
    }
    if (localStorageApi.isMovieInQueueList(filmId)) {
      localStorageApi.removeMovieFromQueueList(filmId);
      addToQueue.classList.toggle('isActive');
      addToQueue.textContent = 'add to queue';
      localStorageApi.addMovieToWatchedList(filmId);
      addWached.classList.toggle('isActive');
      addWached.textContent = 'delete from watched';
      if (libraryBtn.classList.contains('nav-list__link--current')) {
        const queueStorage = document.getElementById('js-queue');
        if (queueStorage.classList.contains('button-list__btn--current')) {
          renderQueueList();
        } else {
          renderWatchedList();
        }
      }

      return;
    }
  }
}
