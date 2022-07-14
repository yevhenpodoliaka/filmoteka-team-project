import icon from '../../images/sprite.svg';

export { rendereThemeIcon, theme }

function rendereThemeIcon() {
    return `<div class="theme container">
    <button class="theme__toggle">
    <svg class="theme__icon--moon" width="30" height="30">
          <use href="${icon}#icon-moon"></use>
    </svg>
    <svg class="theme__icon--sun theme__active" width="30" height="30">
          <use href="${icon}#icon-sun"></use>
    </svg>
    </button>
    </div>`
}

function theme() {
    const toggleThemeBtn = document.querySelector('.theme__toggle');
    const themeIconMoon = document.querySelector('.theme__icon--moon');
    const themeIconSun = document.querySelector('.theme__icon--sun');
    let el = document.documentElement;

    toggleThemeBtn.addEventListener('click', () => {
        if (el.hasAttribute('data-theme')) {
            el.removeAttribute('data-theme')
            themeIconSun.classList.add('theme__active')
            themeIconMoon.classList.remove('theme__active')
            localStorage.removeItem('theme')
        } else {
            el.setAttribute('data-theme', 'dark')
            themeIconSun.classList.remove('theme__active')
            themeIconMoon.classList.add('theme__active')
            localStorage.setItem('theme', 'dark')
        }
    })
    if (localStorage.getItem('theme') !== null) {
        el.setAttribute('data-theme', 'dark')
        themeIconSun.classList.remove('theme__active')
        themeIconMoon.classList.add('theme__active')
        }
}