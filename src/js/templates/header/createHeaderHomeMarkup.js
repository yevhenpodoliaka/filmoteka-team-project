import icon from '../../../images/sprite.svg';

export default function createHeaderHomeMarkup() {
  return `<div class="container">
  <div class="nav-wrap">
    <a href="#" class="header__logo" id="logoLink">
     <svg class="header__icon">
        <use href="${icon}#icon-main-logo"></use>
      </svg>
      <span class="header__text">Filmoteka</span>
    </a>
    <nav>
      <ul class="nav-list">
        <li class="nav-list__item">
          <a
            class="nav-list__link nav-list__link--current"
            href="#"
            id="homeLink"
            >Home</a
          >
        </li>
        <li class="nav-list__item">
          <a class="nav-list__link" href="#" id="libraryLink">My library</a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="search-form-wrap">
    <form class="search-form" id="search-movie">
      <input
        class="search-form__input"
        name="searchQuery"
        type="text"
        placeholder="Movie search"
        autocomplete="off"
      />
      <button class="search-form__button-submit" type="submit">
       <svg width="12" height="12">
          <use href="${icon}#icon-search"></use>
        </svg>
      </button>
    </form>
  </div>
  <p class="notification notification--is-hidden"></p>
  </div>
`;
}
