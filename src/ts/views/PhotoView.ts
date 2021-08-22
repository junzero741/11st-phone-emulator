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
      <nav class = "nav__photo">
        <ul class = "photo__list">
          
        </ul>
      </nav>
      <main class="photo__main">
        <div class="photo__main__box">

        </div>
      </main>
    `;
  }
}
