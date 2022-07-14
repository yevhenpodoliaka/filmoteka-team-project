import placeholder from '../images/empty-library-placeholder.png';

function addEmptyListPlaceholder(element, img = placeholder) {
  element.innerHTML = `<li style="margin: 0 auto;"><img src="${img}"></li>`;
}

export { addEmptyListPlaceholder };

// ========================= Example ================================

/*
 const galleryElement = document.querySelector('.gallery');

 if (localStorageApi.isQueueListEmpty()) {
   addEmptyListPlaceholder(galleryElement);
   return;
 }
*/
