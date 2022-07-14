function showSuccessMessage(total, query) {
  const notification =
    total !== 1
      ? `Total result for <span class="notification--query">${query}</span> is <span class="notification--query">${total}</span> movies`
      : `Total result for <span class="notification--query">${query}</span> is <span class="notification--query">${total}</span> movie`;

  const notificationElement = document.querySelector('.notification');
  notificationElement.innerHTML = notification;
  notificationElement.classList.add('notification--success');
  notificationElement.classList.remove('notification--is-hidden');

  setTimeout(() => {
    notificationElement.classList.add('notification--is-hidden');
    setTimeout(() => {
      notificationElement.classList.remove('notification--success');
      notificationElement.innerHTML = '';
    }, 300);
  }, 2000);
}

export { showSuccessMessage };
