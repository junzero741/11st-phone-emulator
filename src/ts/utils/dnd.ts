export default function dnd(pathName) {
  if (pathName !== '/') return;

  let dragSrcEl = null;
  let items = document.querySelectorAll('.apps__container .app__box');

  items.forEach(function (item) {
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
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation(); //  리다이렉트 방지
    }
    items.forEach((item) => {
      item.classList.remove('over');
      item.classList.remove('moving');
    });
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    saveToLocal();
    return false;
  }

  function handleDragEnd(e) {
    items.forEach((item) => {
      item.classList.remove('over');
      item.classList.remove('moving');
    });
    saveToLocal();
  }

  function saveToLocal() {
    const homeMainWrapper = document.querySelector('.main__wrapper');
    localStorage.setItem('home', JSON.stringify(homeMainWrapper.innerHTML));
  }
}
