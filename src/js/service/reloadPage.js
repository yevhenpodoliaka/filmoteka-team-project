import { changeUrl } from './chengingUrlApi';

// -------Очищуєм параметри запиту і виконуємо перезавантаження-------

export default function reloadPage() {
  changeUrl().reset();
  location.reload();
}

// ------------------------------------
