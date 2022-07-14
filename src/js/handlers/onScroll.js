function onScroll() {
  if (window.matchMedia('(max-width: 768px)').matches) {
    return;
  }

  const gallery = document.querySelector('.gallery');

  if (gallery.childElementCount < 2) {
    return;
  }

  const scrollUpBtn = document.querySelector('.scrollup');

  if (window.pageYOffset > 250) {
    scrollUpBtn.style.display = 'block';
  } else {
    scrollUpBtn.style.display = 'none';
  }

  // console.log('throttle');
}

export { onScroll };
