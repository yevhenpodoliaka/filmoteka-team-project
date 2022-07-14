import icon from '../../images/sprite.svg';
import imgLink1 from '../../images/team-modal/Vitaliy-desk-1x.jpg';
import imgLink2 from '../../images/team-modal/Natalia-desk-1x.jpg';
import imgLink3 from '../../images/team-modal/Dima-desk-1x.jpg';
import imgLink4 from '../../images/team-modal/Viktoriya-desk-1x.jpg';
import imgLink5 from '../../images/team-modal/Ihor-desk-1x.jpg';
import imgLink6 from '../../images/team-modal/Samvel-desk-1x.jpg';
import imgLink7 from '../../images/team-modal/Yevhen-desk-1x.jpg';
import imgLink8 from '../../images/team-modal/Oleksandr-desk-1x.jpg';

export { createTeamModal }

function createTeamModal() {
    return `<div class="team-modal">
      <button class="team-modal__btn-close" type="button">
        <svg width="11" height="11">
            <use href="${icon}#icon-close"></use>
        </svg>
      </button>
      <h2 class="team-modal__title">OUR BEST TEAM OF DEVELOPERS!</h2>
      <ul class="team-modal__list">
          <li class="team-modal__card">
              <img src="${imgLink1}" alt="man Vitaliy">
          <div class="team-modal__box">
              <h3 class="team-modal__box-title">Vitaliy Khivrych</h3>
              <p class="team-modal__text">Team-Lead
                    <a target="_blank" href="https://github.com/Vitalii-Khivrych">
                        <svg width="20" height="20">
                            <use href="${icon}#icon-github-logo"></use>
                        </svg>
                    </a>
              </p>
          </div>
          </li>
          <li class="team-modal__card">
              <img  src="${imgLink2}" alt="woman Natalia">
          <div class="team-modal__box">
              <h3 class="team-modal__box-title">Natalia Delicheban</h3>
              <p class="team-modal__text">Scrum-Master
                        <a target="_blank" href="https://github.com/NataliaDelicheban">
                            <svg width="20" height="20">
                                <use href="${icon}#icon-github-logo"></use>
                            </svg>
                        </a>
              </p>
          </div>
          </li>
          <li class="team-modal__card">
              <img src="${imgLink3}" alt="man Dima">
          <div class="team-modal__box">
              <h3 class="team-modal__box-title">Dima Zharyy</h3>
              <p class="team-modal__text">Web Developer
                        <a target="_blank" href="https://github.com/dima-zharyy">
                            <svg width="20" height="20">
                                <use href="${icon}#icon-github-logo"></use>
                            </svg>
                        </a>
                    </p>
          </div>
          </li>
          <li class="team-modal__card">
              <img src="${imgLink4}" alt="woman Viktoria">
          <div class="team-modal__box">
              <h3 class="team-modal__box-title">Viktoria Fomenko</h3>
              <p class="team-modal__text">Web Developer
                        <a target="_blank" href="https://github.com/ViktoriaFomenko">
                            <svg width="20" height="20">
                                <use href="${icon}#icon-github-logo"></use>
                            </svg>
                        </a>
                    </p>
          </div>
          </li>
          <li class="team-modal__card">
                  <img src="${imgLink5}" alt="man Igor">
          <div class="team-modal__box">
              <h3 class="team-modal__box-title">Igor Smelyanets</h3>
              <p class="team-modal__text">Web Developer
                        <a target="_blank" href="https://github.com/IgorSME">
                            <svg width="20" height="20">
                                <use href="${icon}#icon-github-logo"></use>
                            </svg>
                        </a>
                    </p>
          </div>
          </li>
          <li class="team-modal__card">
              <img src="${imgLink6}" alt="man Samvel">
          <div class="team-modal__box">
              <h3 class="team-modal__box-title">Samvel Ogmrtsyan</h3>
              <p class="team-modal__text">Web Developer
                        <a target="_blank" href="https://github.com/samvel216">
                        <svg width="20" height="20">
                            <use href="${icon}#icon-github-logo"></use>
                        </svg>
                    </a></p>
          </div>
          </li>
          <li class="team-modal__card">
                  <img src="${imgLink7}" alt="man Yevhen">
          <div class="team-modal__box">
              <h3 class="team-modal__box-title">Yevhen Podoliaka</h3>
              <p class="team-modal__text">Web Developer
                        <a target="_blank" href="https://github.com/yevhenpodoliaka">
                            <svg width="20" height="20">
                                <use href="${icon}#icon-github-logo"></use>
                            </svg>
                        </a>
                    </p>
          </div>
          </li>
          <li class="team-modal__card">
              <img src="${imgLink8}" alt="man Oleksandr">
          <div class="team-modal__box">
              <h3 class="team-modal__box-title">Oleksandr Suprun</h3>
              <p class="team-modal__text">Web Developer
                        <a target="_blank" href="https://github.com/parfors">
                            <svg width="20" height="20">
                                <use href="${icon}#icon-github-logo"></use>
                            </svg>
                        </a>
              </p>
          </div>
          </li>
      </ul>
    </div>`
    }