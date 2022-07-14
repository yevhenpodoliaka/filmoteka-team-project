import icon from '../../images/sprite.svg';
export default function trailerMarkup(videoKey) {
  return `<div
  class ="modal__video is-hidden">
     <button  class="modal__btn-close-trailer"><svg class="modal__close-icon" width="14" height="14">
        <use href="${icon}#icon-close"></use>
      </svg></button>
    <iframe class="video-frame" src="https://www.youtube.com/embed/${videoKey}?autoplay=1"
    frameborder = '0';
    title = 'YouTube video player';
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe></div>`;
}
