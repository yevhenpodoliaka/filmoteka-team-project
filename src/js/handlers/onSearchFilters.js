import Api from '../service/api-service';
import handleResponse from './handlerResponse';
import { changeUrl } from '../service/chengingUrlApi';

import createSearchFilter from '../createSearchFilter';

const apiServiceFilterSearch = new Api();

function onFilterUpdate() {
  const genre = document.querySelector('#genre');
  const year = document.querySelector('#year');

  // apiServiceFilterSearch.genreIdFilter = genre.value;
  // apiServiceFilterSearch.yearFilter = year.value;
  apiServiceFilterSearch.resetPage();

  changeUrl().goToFilter(genre.value || 'all', year.value || 'all');

  filterMovie();
}

async function filterMovie() {
  try {
    const galleryRef = document.querySelector('.gallery');
    const paginationSectionRef = document.querySelector('.pagination');
    // galleryRef.innerHTML = '';
    // paginationSectionRef.innerHTML = '';

    createSearchFilter();

    apiServiceFilterSearch.genreIdFilter = changeUrl().getGenre();
    apiServiceFilterSearch.yearFilter = changeUrl().getYeare();
    apiServiceFilterSearch.pageNumber = +changeUrl().getCurrentPage();

    genre.value = apiServiceFilterSearch.genreIdFilter || 'all';
    year.value = apiServiceFilterSearch.yearFilter || 'all';

    const response = await apiServiceFilterSearch.fetchMoviesByFilters();

    response.total_pages <= 500
      ? response.total_pages
      : (response.total_pages = 500);
    handleResponse(response, apiServiceFilterSearch);
  } catch (err) {
    console.log(err);
  }
}

export { onFilterUpdate, filterMovie };
