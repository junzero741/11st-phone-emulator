import AbstractView from './AbstractView';

export default class extends AbstractView {
  constructor() {
    super();
  }

  getHtml() {
    return `
      <header>
        <a href="/" class="nav__link" data-link>
          Back
        </a>
        <span class="clock"></span>
      </header>
      <p>
          사진 모음
      </p>
    `;
  }
}
