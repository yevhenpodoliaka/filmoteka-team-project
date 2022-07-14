function scrollUp() {
  const headerHeight = document.querySelector('header').clientHeight;
  window.scrollTo({
    top: headerHeight,
    behavior: "smooth"
});
}

export { scrollUp };
