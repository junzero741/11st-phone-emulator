import AbstractView from './AbstractView';

export default class extends AbstractView {
  constructor() {
    super();
  }

  async getHtml() {
    return `
      <header>${new Date()}</header>
      <a href="/" class="nav__link" data-link>Back</a>
      <p>
          사진 모음
      </p>
    `;
  }
}
