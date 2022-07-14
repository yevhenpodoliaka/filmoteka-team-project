import { renderTeamModal } from "../templates/render-team-modal";

export default function onGoItClick() {
    let openTeamModalBtn = document.querySelector('.footer__button');
    openTeamModalBtn.addEventListener('click', renderTeamModal);
}
