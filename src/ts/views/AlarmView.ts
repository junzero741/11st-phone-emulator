import AbstractView from './AbstractView';

export default class extends AbstractView {
  constructor() {
    super();
  }

  async getHtml() {
    return `
      <header>
        <a href="/" class="nav__link" data-link>
          Back
        </a>
        <span>${new Date()}</span>
      </header>
      
      <p>
          알람 모음
      </p>
    `;
  }
}
