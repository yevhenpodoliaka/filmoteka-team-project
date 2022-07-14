import icon from '../../../images/sprite.svg';

export default function createHeaderLibraryMarkup() {
  return `<div class="container">
  <div class="nav-wrap additional-margin">
    <a href="#" class="header__logo header__logo--active" id="logoLink">
      <svg class="header__icon">
        <use href="${icon}#icon-main-logo"></use>
      </svg>
      <span class="header__text">Filmoteka</span>
    </a>
    <nav>
      <ul class="nav-list">
        <li class="nav-list__item">
          <a class="nav-list__link" href="#" id="homeLink">Home</a>
        </li>
        <li class="nav-list__item">
          <a class="nav-list__link nav-list__link--current" href="#" id="libraryLink"
            >My library</a
          >
        </li>
      </ul>
    </nav>
  </div>
  <ul class="button-list">
    <li class="button-list__item">
      <button class="button-list__btn " type="button" id="js-watched">
        Watched
      </button>
    </li>
    <li class="button-list__item">
      <button class="button-list__btn button-list__btn--current" type="button" id="js-queue">Queue</button>
    </li>
  </ul>
  </div>
`;
}
