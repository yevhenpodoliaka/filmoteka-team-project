import { scrollUp } from './scrollUp';
import spiner from './spiner';
import makePaginatuonBtnMarkup from './templates/paginationMarkup';
import { renderQueueList } from './templates/renderQueueList';
import { renderWatchedList } from './templates/renderWatchedList';

function renderQueuePagination(data, apiService) {
  const paginationSectionRef = document.querySelector('.pagination');
  const currentPage = apiService.pageNumber;
  let lastPage = 1;

  if (data.length <= 20) {
    paginationSectionRef.innerHTML = '';
    return;
  }

  if (data) {
    lastPage = data.length > 20 ? Math.ceil(data.length / 20) : 1;
  }

  paginationSectionRef.innerHTML = makePaginatuonBtnMarkup(
    currentPage,
    lastPage
  );

  // ------------- Логіка роботи кнопок пагінаціі -----------
  const paginationBtn = document.querySelector('.pagination-list ');
  paginationBtn.addEventListener('click', onBtnClick);

  function onBtnClick(e) {
    e.preventDefault();

    if (+e.target.textContent === currentPage) {
      return;
    }

    if (e.target.id === 'next') {
      spiner.on();
      apiService.incrementPage();

      renderQueueList();
      scrollUp();
      return;
    }

    if (e.target.id === 'previous') {
      spiner.on();
      apiService.decrementPage();

      renderQueueList();
      scrollUp();
      return;
    }

    if (e.target.textContent !== '...' && e.target.nodeName === 'BUTTON') {
      spiner.on();
      apiService.pageNumber = +e.target.textContent;

      renderQueueList();
      scrollUp();
    }
  }
}

function renderWatchedPagination(data, apiService) {
  const paginationSectionRef = document.querySelector('.pagination');
  const currentPage = apiService.pageNumber;
  let lastPage = 1;

  if (data.length <= 20) {
    paginationSectionRef.innerHTML = '';
    return;
  }

  if (data) {
    lastPage = data.length > 20 ? Math.ceil(data.length / 20) : 1;
  }

  paginationSectionRef.innerHTML = makePaginatuonBtnMarkup(
    currentPage,
    lastPage
  );

  // ------------- Логіка роботи кнопок пагінаціі -----------
  const paginationBtn = document.querySelector('.pagination-list ');
  paginationBtn.addEventListener('click', onBtnClick);

  function onBtnClick(e) {
    e.preventDefault();

    if (+e.target.textContent === currentPage) {
      return;
    }

    if (e.target.id === 'next') {
      spiner.on();
      apiService.incrementPage();

      renderWatchedList();
      scrollUp();
      return;
    }

    if (e.target.id === 'previous') {
      spiner.on();
      apiService.decrementPage();

      renderWatchedList();
      scrollUp();
      return;
    }

    if (e.target.textContent !== '...' && e.target.nodeName === 'BUTTON') {
      spiner.on();
      apiService.pageNumber = +e.target.textContent;

      renderWatchedList();
      scrollUp();
    }
  }
}

export { renderQueuePagination, renderWatchedPagination };
