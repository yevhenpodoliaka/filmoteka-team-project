import createInitialHeaderMarkup from './createInitialHeaderMarkup';
import { onLibraryLinkClick } from '../../handlers/onLibraryLinkClick';
import {
  onSearchMovie,
  onFocusInput,
  onBlurInput,
} from '../../handlers/onSearchMovie';
import reloadPage from '../../service/reloadPage';

// после инициализации блок header остается и рендеририться будет только разметка внутри
// оставляю фиксированный блок для того, чтобы при переходе на другие страницы, не прыгала разметка
const rootRef = document.querySelector('#root');

const initHeader = () => {
  const headerMarkup = createInitialHeaderMarkup();
  rootRef.insertAdjacentHTML('afterbegin', headerMarkup);

  // -------Очищуєм параметри запиту і виконуємо перезавантаження-------
  // const logoIconRef = document.querySelector('#logoLink');
  // logoIconRef.addEventListener('click', reloadPage);
  // ------------------------------------

  // document.body.insertAdjacentHTML('afterbegin', headerMarkup);

  const libraryLink = document.getElementById('libraryLink');
  libraryLink.addEventListener('click', onLibraryLinkClick);

  const searchInput = document.getElementById('search-movie');
  searchInput.addEventListener('submit', onSearchMovie);

  // const searchInputPlaceholder = document.querySelector('.search-form__input');
  // searchInputPlaceholder.addEventListener('focus', onFocusInput);
  // searchInputPlaceholder.addEventListener('blur', onBlurInput);
};

export { initHeader };
