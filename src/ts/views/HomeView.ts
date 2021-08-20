import AbstractView from './AbstractView';
import getDate from '../utils/getDate';

export default class extends AbstractView {
  constructor() {
    super();
  }

  getHtml() {
    return `
    <header><span class="clock"></span></header>
    <main class = "apps__container">
    <a href="/alarms" class="app__icon" data-link>Alarms</a>
    <a href="/memos" class="app__icon" data-link>Memos</a>
    <a href="/photos" class="app__icon" data-link>Photos</a>
    </main>
    `;
  }
}
