import defaultPoster from '../../images/no-poster.jpg';

export default function renderPopularCards(cards, genres) {
  // console.log(cards);
  // console.log(genres);
  const markup = cards
    .map(
      ({
        poster_path,
        // backdrop_path,
        original_title,
        // original_name,
        genre_ids,
        release_date,
        // first_air_date,
        vote_average,
        id,
      }) => {
        // const poster_url = poster_path : poster_path ? backdrop_path;

        // const imageUrl = poster_path
        //   ? `https://image.tmdb.org/t/p/w500/${poster_url}`
        //   : `${defaultPoster}`;
        const imageUrl = poster_path
          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
          : `${defaultPoster}`;

        const date = release_date;
        // const name = original_title ? original_title : original_name;

        // const dateArr = date.split('-');

        const year = release_date ? new Date(date).getFullYear() : 'N/A';

        // console.log(genre_ids);
        const genreArr = genre_ids
          ? genre_ids.slice(0, 2).map(id => genres.get(id))
          : ['Others'];

        if (genre_ids && genre_ids.length > 2) {
          genreArr.push('Others');
        }

        const genreStr = genreArr.join(', ');

        const vote =
          vote_average !== undefined ? vote_average.toFixed(1) : 'N/A';

        return `<li class="gallery__item card" data-id="${id}">
          <img
            class="card__image"
            src=${imageUrl}
            alt="poster"
            loading="lazy"
          />
          <div class="card__info" >
            <p class="card__title">${original_title}</p>
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
