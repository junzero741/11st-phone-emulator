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
        <button class = "new__alarm">NEW</button>
      </header>
      
      <main class ="alarm_wrapper">
        <form class = "alarm__form hide">
          <select name="ampm" class="alarm__input__ampm">
            <option value="am">오전</option>
            <option value="pm">오후</option>
          </select>
          <input type="number" class= "alarm__input__hours" min="1" max="12" value="1"/>
          <input type="number" class= "alarm__input__minutes" min="0" max="50" step="10" value="0"/>
          <input type="submit" class= "alarm__input__submit" value = "저장"/> 
        </form>
        <ul class = "alarm__list"></ul>          
      </main>
    `;
  }
}
