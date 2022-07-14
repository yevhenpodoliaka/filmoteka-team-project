import icon from '../../images/sprite.svg';

export default function makePaginatuonBtnMarkup(currentPage, lastPage) {
  const prevArow = `<li class="item">
                      <button class="pagination__arrow pagination__arrow-left" id='previous'>
                        <svg class="pagination-arrow-icon" >
                          <use href="${icon}#icon-arrow-left"></use>
                        </svg>
                      </button>
                    </li>`;
  const nextArow = `<li class="item">
                      <button class="pagination__arrow pagination__arrow-right" id='next'>
                        <svg class="pagination-arrow-icon">
                          <use href="${icon}#icon-arrow-right" ></use>
                        </svg>
                      </button>
                    </li>`;
  const firstPageBtn = `<li class="item">
                          <button class="pagination__btn">1</button>
                        </li>`;
  const moreBtn = `<li class="item">
                    <button class="pagination-btn-more">...</button>
                  </li>`;
  const prevPrevBtn = `<li class="item">
                        <button class="pagination__btn">${
                          currentPage - 2
                        }</button>
                      </li>`;
  const prevBtn = `<li class="item">
                    <button class="pagination__btn">${currentPage - 1}</button>
                  </li>`;
  const currentBtn = `<li class="item">
                        <button class="pagination__btn pagination__btn--choice">${currentPage}</button>
                      </li>`;
  const nextBtn = `<li class="item">
                    <button class="pagination__btn">${currentPage + 1}</button>
                  </li>`;
  const nextNextBtn = ` <li class="item">
                          <button class="pagination__btn">${
                            currentPage + 2
                          }</button>
                        </li>`;
  const lastBtn = `<li class="item">
                    <button class="pagination__btn">${lastPage}</button>
                  </li>`;

  const buttonArr = [];
  const isMobile = window.matchMedia('(max-width:768px)').matches;

  buttonArr.push('<ul class="pagination-list">');

  if (lastPage === 1) {
    return '';
  }

  if (currentPage > 1) {
    buttonArr.push(prevArow);
  }

  if (currentPage > 1 && !isMobile) {
    buttonArr.push(firstPageBtn);
  }

  if (currentPage > 1 && currentPage < 4 && isMobile) {
    buttonArr.push(firstPageBtn);
  }

  if (currentPage > 4 && !isMobile) {
    buttonArr.push(moreBtn);
  }

  for (let i = currentPage - 2; i < currentPage + 3; i += 1) {
    if (i === currentPage) {
      buttonArr.push(currentBtn);
      continue;
    }

    if (i > 1 && i <= lastPage - 1) {
      buttonArr.push(`<li class="item">
                    <button class="pagination__btn">${i}</button>
                  </li>`);
    }
  }

  if (currentPage < lastPage - 3 && !isMobile) {
    buttonArr.push(moreBtn);
  }

  if (currentPage > lastPage - 3 && currentPage < lastPage && isMobile) {
    buttonArr.push(lastBtn);
  }

  if (currentPage < lastPage && !isMobile) {
    buttonArr.push(lastBtn);
  }

  if (currentPage < lastPage) {
    buttonArr.push(nextArow);
  }

  buttonArr.push('</ul>');

  const markup = buttonArr.join('');
  return markup;
}
