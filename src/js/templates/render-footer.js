import icon from '../../images/sprite.svg';

function renderFooter() {
  return `<footer>
  <div class="footer__container container">
    <p class="footer__text">© 2022 | All Rights Reserved |</p>
    <p class="footer__text">
      Developed with<svg xmlns="http://www.w3.org/2000/svg" id="icon-heart" class="footer__icon" viewBox="0 0 34 32" width="14" height="13">
      <path
        d="M17.231 31.705l-2.412-2.412c-8.96-7.926-14.818-13.268-14.818-19.815 0-5.342 4.135-9.477 9.477-9.477 2.929 0 5.858 1.378 7.754 3.618 1.895-2.24 4.825-3.618 7.754-3.618 5.342 0 9.477 4.135 9.477 9.477 0 6.548-5.858 11.889-14.818 19.815l-2.412 2.412z"
      ></path>
    </svg>by
      <button type="button" class="footer__button">GoIT Students</button>
    </p>
  </div>
</footer>`;
}

export default renderFooter;
