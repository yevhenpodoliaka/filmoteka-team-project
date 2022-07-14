import makeBasicFilterMarkup from './templates/render-filter';
import { onFilterUpdate } from './handlers/onSearchFilters';
import { createTrendingMovieGallery } from './initRenderTrendingMovie';
import { changeUrl } from './service/chengingUrlApi';

export default function createSearchFilter() {
  const galleryTitleRef = document.querySelector('.filter__wrap');

  galleryTitleRef.innerHTML = makeBasicFilterMarkup();

  document.querySelector('.filter').addEventListener('change', onFilterUpdate);
  document.querySelector('.filter button').addEventListener('click', () => {
    changeUrl().reset();
    createTrendingMovieGallery();
  });
}
