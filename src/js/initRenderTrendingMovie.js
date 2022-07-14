import Api from './service/api-service';
import handleResponse from './handlers/handlerResponse';
import { changeUrl } from './service/chengingUrlApi';
import createSearchFilter from './createSearchFilter';
import { searchMovie } from './handlers/onSearchMovie ';
import { filterMovie } from './handlers/onSearchFilters';
import { changeUrl } from './service/chengingUrlApi';

const apiServiceTrending = new Api();

function initRenderTrendingMovie() {
  if (changeUrl().isSearch()) {
    searchMovie();
    return;
  }

  if (changeUrl().isFilter()) {
    filterMovie();
    return;
  }

  createTrendingMovieGallery();
}

async function createTrendingMovieGallery() {
  apiServiceTrending.pageNumber = +changeUrl().getCurrentPage();
  createSearchFilter();

  try {
    const response = await apiServiceTrending.fetchTrending();
    handleResponse(response, apiServiceTrending);
  } catch (error) {
    console.log(error);
  }
}

export { initRenderTrendingMovie, appService, createTrendingMovieGallery };
