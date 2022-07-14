const spiner = {
  markup: `<div id="spiner" class="spiner__holder is-hidden">
        <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <p class="spiner__text">Please stand by</p>
        </div>
    </div>`,

  getMarkup() {
    return this.markup;
  },
  insertIn(element) {
    element.insertAdjacentHTML('beforeend', this.markup);
  },
  off() {
    const spiner = document.querySelector('#spiner');
    spiner.classList.add('is-hidden');
  },
  on() {
    const spiner = document.querySelector('#spiner');
    spiner.classList.remove('is-hidden');
    setTimeout(() => {
      this.off();
    }, 500);
  },
  delete() {
    const spiner = document.querySelector('#spiner');
    spiner.remove();
  },
};

export default spiner;
