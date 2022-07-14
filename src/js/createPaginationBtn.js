import makePaginatuonBtnMarkup from './templates/paginationMarkup';
import { initRenderTrendingMovie } from './initRenderTrendingMovie';
import { searchMovie } from './handlers/onSearchMovie';
import { filterMovie } from './handlers/onSearchFilters';
import spiner from './spiner';
import { changeUrl } from './service/chengingUrlApi';
import { scrollUp } from './scrollUp';

function createPaginationBtn(data, apiService) {
  const paginationSectionRef = document.querySelector('.pagination');
  const currentPage = apiService.pageNumber;
  const lastPage = data.total_pages;

  paginationSectionRef.innerHTML = makePaginatuonBtnMarkup(
    currentPage,
    lastPage
  );

  // ------------- Логіка роботи кнопок пагінаціі -----------
  const paginationBtn = document.querySelector('.pagination-list ');
  paginationBtn.addEventListener('click', onPaginationBtnClick);

  function onPaginationBtnClick(e) {
    e.preventDefault();

    if (+e.target.textContent === currentPage) {
      return;
    }

    if (e.target.id === 'next') {
      spiner.on();
      apiService.incrementPage();

      // console.log(apiService.pageNumber);

      changeUrl().changePage(apiService.pageNumber);

      if (changeUrl().isSearch()) {
        changeUrl().setQuery(apiService.query);

        searchMovie();
        scrollUp();
        return;
      }

      if (changeUrl().isFilter()) {
        changeUrl().setFilter(apiService.genre, apiService.year);

        filterMovie();
        scrollUp();
        return;
      }

      initRenderTrendingMovie();
      scrollUp();
      return;
    }

    if (e.target.id === 'previous') {
      spiner.on();
      apiService.decrementPage();

      changeUrl().changePage(apiService.pageNumber);

      if (changeUrl().isSearch()) {
        changeUrl().setQuery(apiService.query);

        searchMovie();
        scrollUp();
        return;
      }

      if (changeUrl().isFilter()) {
        changeUrl().setFilter(apiService.genre, apiService.year);

        filterMovie();
        scrollUp();
        return;
      }

      initRenderTrendingMovie();
      scrollUp();

      return;
    }

    if (e.target.textContent !== '...' && e.target.nodeName === 'BUTTON') {
      spiner.on();
      apiService.pageNumber = +e.target.textContent;
      changeUrl().changePage(apiService.pageNumber, apiService.query);

      if (changeUrl().isSearch()) {
        changeUrl().setQuery(apiService.query);

        searchMovie();
        scrollUp();
        return;
      }

      if (changeUrl().isFilter()) {
        changeUrl().setFilter(apiService.genre, apiService.year);

        filterMovie();
        scrollUp();
        return;
      }

      initRenderTrendingMovie();
      scrollUp();
    }
  }
}

// function removePaginationBtnClick() {
//   paginatioRef.removeEventListener('click', onPaginationBtnClick);
// }

export { createPaginationBtn };
