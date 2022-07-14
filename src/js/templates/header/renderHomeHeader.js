import createHeaderHomeMarkup from './createHeaderHomeMarkup';
import { onLibraryLinkClick } from '../../handlers/onLibraryLinkClick';
import { onSearchMovie } from '../../handlers/onSearchMovie';
import { initRenderTrendingMovie } from '../../initRenderTrendingMovie';
import reloadPage from '../../service/reloadPage';
import {
  onSearchMovie,
  onFocusInput,
  onBlurInput,
} from '../../handlers/onSearchMovie';

const renderHomeHeader = () => {
  const headerElement = document.querySelector('.header');

  headerElement.innerHTML = createHeaderHomeMarkup();
  headerElement.classList.remove('additional-bg');

  const libraryLink = document.getElementById('libraryLink');
  libraryLink.addEventListener('click', onLibraryLinkClick);

  const searchInput = document.getElementById('search-movie');
  searchInput.addEventListener('submit', onSearchMovie);

  // -------Очищуєм параметри запиту і виконуємо перезавантаження-------
  // const logoIconRef = document.querySelector('#logoLink');
  // logoIconRef.addEventListener('click', reloadPage);
  // ------------------------------------

  // const searchInputPlaceholder = document.querySelector('.search-form__input');
  // searchInputPlaceholder.addEventListener('focus', onFocusInput);
  // searchInputPlaceholder.addEventListener('blur', onBlurInput);

  initRenderTrendingMovie();
};

export { renderHomeHeader };
