export default function dnd() {
  let dragSrcEl = null;
  let items = document.querySelectorAll('.apps__container .app__box');

  items.forEach((item) => {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('dragend', handleDragEnd, false);
    item.addEventListener('drop', handleDrop, false);
  });

  function handleDragStart(e) {
    this.classList.add('moving');
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDragOver(e) {
    e.preventDefault && e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
  }

  function handleDragEnter() {
    this.classList.add('over');
  }

  function handleDragLeave() {
    this.classList.remove('over');
  }

  function handleDrop(e) {
    e.stopPropagation && e.stopPropagation(); //  리다이렉트 방지

    removeClass();
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML; // 드래그 중인 앱과 목적지의 앱 교체
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    saveToLocal(); // 드래그 후 드랍할 때 상태 저장
    return false;
  }

  function handleDragEnd() {
    removeClass();
    saveToLocal(); // 드래그 끝날 때 상태 저장
  }

  function removeClass() {
    items.forEach((item) => {
      item.classList.remove('over');
      item.classList.remove('moving');
    });
  }

  function saveToLocal() {
    const homeMainWrapper = document.querySelector('.main__wrapper');
    localStorage.setItem('home', JSON.stringify(homeMainWrapper.innerHTML));
  }
}
