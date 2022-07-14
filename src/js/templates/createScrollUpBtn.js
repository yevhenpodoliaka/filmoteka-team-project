import icons from '../../images/sprite.svg';

function createScrollUpBtn() {
  return `<div class="scrollup">
      <svg class="scrollup__icon">
        <use href="${icons}#icon-arrow"></use>
      </svg>
    </div>`;
}

export { createScrollUpBtn };
