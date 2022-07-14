import createHeaderLibraryMarkup from './createHeaderLibraryMarkup';
import { onHomeLinkClick } from '../../handlers/onHomeLinkClick';
import { renderQueueList } from '../renderQueueList';
import { renderWatchedList } from '../renderWatchedList';

const renderLibraryHeader = () => {
  const headerElement = document.querySelector('.header');

  headerElement.innerHTML = createHeaderLibraryMarkup();
  headerElement.classList.add('additional-bg');

  // ------Убираем фильтр----------
  const galleryTitleRef = document.querySelector('.filter__wrap');
  galleryTitleRef.innerHTML = '';
  // ----------------------------

  const homeLink = document.getElementById('homeLink');
  const logoLink = document.getElementById('logoLink');
  const watchedListEL = document.getElementById('js-watched');
  const queueListEl = document.getElementById('js-queue');

  homeLink.addEventListener('click', onHomeLinkClick);
  logoLink.addEventListener('click', onHomeLinkClick);
  watchedListEL.addEventListener('click', renderWatchedList);
  queueListEl.addEventListener('click', renderQueueList);
};

export { renderLibraryHeader };
