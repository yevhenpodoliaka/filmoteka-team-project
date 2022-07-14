import Api from '../service/api-service';
import { renderLibraryCards } from './renderLibraryCards';
import { localStorageApi } from '../service/localStorageApi';
import { addEmptyListPlaceholder } from '../addEmptyListPlaceholder';
import { renderWatchedPagination } from '../renderLibraryPagination';
import { devideListBy20 } from '../devideListBy20';
import spiner from '../spiner';
import { changeUrl } from '../service/chengingUrlApi';

const apiService = new Api();

function renderWatchedList() {
  spiner.on();

  const queueBtn = document
    .getElementById('js-queue')
    .classList.remove('button-list__btn--current');
  const watchedBtn = document
    .getElementById('js-watched')
    .classList.add('button-list__btn--current');
  const galleryElement = document.querySelector('.gallery');
  const watchedList = localStorageApi.getWatchedList();
  const devidedWatchedlist = watchedList
    ? devideListBy20(watchedList)
    : watchedList;

  // galleryElement.innerHTML = '';

  if (localStorageApi.isWatchedListEmpty()) {
    addEmptyListPlaceholder(galleryElement);
    const paginationElement = document.querySelector('.pagination');
    paginationElement.innerHTML = '';
    return;
  }

  renderWatchedPagination(watchedList, apiService);

  const movieCards = devidedWatchedlist[apiService.pageNumber - 1].map(id =>
    apiService.fetchMovieDetails(id).catch(error => console.log(error))
  );

  Promise.all(movieCards)
    .then(cards => {
      // changeUrl().goToLibrary();
      const libraryMarkup = renderLibraryCards(cards);
      galleryElement.innerHTML = libraryMarkup;

      // setTimeout(() => {
      //   spiner.off();
      // }, 500);
    })
    .catch(error => console.log(error));
}

export { renderWatchedList };
