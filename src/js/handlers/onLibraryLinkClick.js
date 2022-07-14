import { renderLibraryHeader } from '../templates/header/renderLibraryHeader';
import { renderQueueList } from '../templates/renderQueueList';

import spiner from '../spiner';
import { changeUrl } from '../service/chengingUrlApi';

// Добавить проверку авторизации в начало

const onLibraryLinkClick = async event => {
  try {
    event.preventDefault();

    renderLibraryHeader();
    renderQueueList();
    // changeUrl().goToLibrary();
  } catch {
    err => console.log(err);
  }
};

export { onLibraryLinkClick };
