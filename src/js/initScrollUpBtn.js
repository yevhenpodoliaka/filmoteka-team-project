import { createScrollUpBtn } from './templates/createScrollUpBtn';
import { onBtnScrollClick } from './handlers/onBtnScrollClick';
import { onScroll } from './handlers/onScroll';
import throttle from 'lodash.throttle';

function initScrollUpBtn() {
  const root = document.getElementById('root');
  const btnMarkup = createScrollUpBtn();
  root.insertAdjacentHTML('beforeend', btnMarkup);

  const scrollUpBtn = document.querySelector('.scrollup');
  scrollUpBtn.addEventListener('click', onBtnScrollClick);
  document.addEventListener('scroll', throttle(onScroll, 300));
}

export { initScrollUpBtn };
