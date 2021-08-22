import AbstractView from './AbstractView';
import cat_1 from '../../images/cat_1.jpg';

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
      <nav>
        <ul>
          <img src = ${cat_1} /> 
        </ul>
      </nav>
      <main>

      </main>
    `;
  }
}
