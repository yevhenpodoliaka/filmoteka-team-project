import renderPopularCards from '../templates/render-popular-card';
import { createPaginationBtn } from '../createPaginationBtn';
import spiner from '../spiner';
import { showNoResultMessage } from '../showFailMessage';
import { changeUrl } from '../service/chengingUrlApi';
import { showSuccessMessage } from '../showSuccessMessage';
// import { scrollUp } from '../scrollUp';

export default async function handleResponse(response, apiService) {
  if (response.total_results === 0) {
    spiner.off();

    showNoResultMessage();
    changeUrl().reset();
    return;
  }

  // console.log(response);
  const cards = response.results;

  try {
    const res = await apiService.fetchGenres();
    const genreMap = new Map(
      res.genres.map(object => {
        return [object.id, object.name];
      })
    );

    const galleryRef = document.querySelector('.gallery');

    galleryRef.innerHTML = renderPopularCards(cards, genreMap);

    if (apiService.searchQuery) {
      showSuccessMessage(response.total_results, apiService.searchQuery);
    }

    createPaginationBtn(response, apiService);

    // setTimeout(() => {
    //   spiner.off();
    // }, 500);
  } catch {
    err => console.log(err);
  }
}
