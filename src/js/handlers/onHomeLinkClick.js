import { renderHomeHeader } from '../templates/header/renderHomeHeader';
// import { changeUrl } from '../service/chengingUrlApi';

const onHomeLinkClick = event => {
  event.preventDefault();

  renderHomeHeader();
  // changeUrl().goToHome();
};

export { onHomeLinkClick };
