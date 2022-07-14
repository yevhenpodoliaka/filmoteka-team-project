import icon from '../../images/sprite.svg';
import defaultPoster from '../../images/no-poster.jpg';

export default function createModalMarkup({
  poster_path,
  genres = [],
  vote_count,
  vote_average,
  original_title,
  popularity,
  title,
  overview,
}) {
  if (overview.length === 0) {
    overview = overview + 'Sorry, there is no description for this movie.';
  }
  const genersList = genres.map(element => element.name).join(', ');
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : `${defaultPoster}`;
  const aboutText = overview.slice(0, 1000);
  return `<div class="modal">
        <div class="modal__card">
         <button class="modal__close" data-action="close-modal"><svg class="modal__close-icon" width="14" height="14">
        <use href="${icon}#icon-close"></use>
      </svg></button>
        <div class="modal__content">
     
    <button class="modal__btn-play is-hidden"><svg class="modal__play-icon">
        <use href="${icon}#icon-youtube" ></use>
      </svg></button>
    <img class="modal__img" src="${imageUrl}" alt="cinema" />
  </div>

  
    <div class="modal__description-wrap">
      <h2 class="modal__title">${title}</h2>
      <table class="modal__info">
  <tr>
    <td class="modal__info-key">Vote/votes</td>
    <td "modal__info-value">
    <span class="modal__info-value--accent">${vote_average}</span>
     <span class="modal__info-value--slash">/ </span
    ><span class="modal__info-value--grey">${vote_count}</span>
    </td>
  </tr>
  <tr>
    <td class="modal__info-key">Popularity</td>
    <td "modal__info-value">${popularity}</td>
  </tr>
  <tr>
    <td class="modal__info-key">Original Title</td>
    <td "modal__info-value">${original_title}</td>
  </tr>
  <tr>
    <td class="modal__info-key">Genre</td>
    <td "modal__info-value">${genersList}</td>
  </tr>
</table>
    
      <h3 class="modal__about-title">About</h3>
      <p class="modal__about-text">
        ${aboutText}
      </p>
      <div class="modal__option">
        <button class="btn-add-watched" data-action="add-watched">add to Watched</button>
        <button class="btn-add-queue" data-action="add-queue">add to queue</button>
      </div>
    </div>
    </div>
  </div>`;
}
