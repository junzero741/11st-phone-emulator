import AbstractView from './AbstractView';

export default class extends AbstractView {
  constructor() {
    super();
  }

  getHtml() {
    return `
      <header>
        <a href="/" class="nav__link" data-link>BACK</a>
        <span class="clock"></span>
        <button class="new__memo" >NEW</button>
      </header>
      
      <main class= "memo__wrapper">
          <input type="text" class="memo__input hide" />
          <ul class = "memo__list">
          
          <ul>
      </main>
    `;
  }
}
