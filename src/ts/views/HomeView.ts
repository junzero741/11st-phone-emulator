import AbstractView from './AbstractView';
require('../../css/home.css');

export default class extends AbstractView {
  constructor() {
    super();
  }

  getHtml() {
    if (localStorage.getItem('home')) {
      const html = JSON.parse(localStorage.getItem('home'));
      return `
      <header><span class="clock"></span></header>
      <wrapper class="main__wrapper">
        ${html}
      </wrapper>
      `;
    }

    return `
    <header><span class="clock"></span></header>
    <wrapper class="main__wrapper">
      <main class = "apps__container">
        <div draggable = "true" class="app__box">
          <a href="/alarms" class="app__icon" data-link>알람</a>
        </div>
        <div draggable = "true" class="app__box">
          <a href="/memos" class="app__icon" data-link>메모</a>
        </div>
        <div draggable = "true" class="app__box">
          <a href="/photos" class="app__icon" data-link>사진</a>
        </div>
      </main>
    </wrapper>
    `;
  }
}
