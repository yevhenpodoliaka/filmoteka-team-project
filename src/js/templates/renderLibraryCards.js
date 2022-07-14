function renderLibraryCards(cards) {
  const markup = cards
    .map(
      ({
        poster_path,
        original_title,
        original_name,
        genres,
        release_date,
        first_air_date,
        vote_average,
        id,
      }) => {
        const date = release_date ? release_date : first_air_date;
        const year = new Date(date).getFullYear();
        const name = original_title ? original_title : original_name;
        const vote = vote_average ? vote_average.toFixed(1) : 'N/A';

        const genreArr = genres
          ? genres.slice(0, 2).map(genre => genre.name)
          : [];

        if (genres.length > 2 || genres.length === 0) {
          genreArr.push('Others');
        }

        const genreStr = genreArr.join(', ');

        return `<li class="gallery__item card" data-id="${id}">
          <img
            class="card__image"
            src="https://image.tmdb.org/t/p/w500/${poster_path}"
            alt="poster"
            loading="lazy"
          />
          <div class="card__info" >
            <p class="card__title">${name}</p>
            <div class="card__movie-info">
              <p class="card__genre">${genreStr}</p>
              <span class="vertical">&nbsp|&nbsp</span>
              <p class="card__release">${year}</p>
              <p class="card__rating">${vote}</p>
            </div>
          </div>
      </li>`;
      }
    )
    .join('');

  return markup;
}

export { renderLibraryCards };
