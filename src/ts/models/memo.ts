import { HTMLElementEvent } from '../types';

// memo 페이지가 렌더링될때 실행되는 함수들
const memo = () => {
  const memoInput = <HTMLInputElement>document.querySelector('.memo__input');
  const newMemoBtn = document.querySelector('.new__memo');
  const memoList = document.querySelector('.memo__list');

  // 메모 클릭하여 상세보기
  const onMemoClick = () => {
    memoList.addEventListener('click', (e: HTMLElementEvent<HTMLParagraphElement>) => {
      const ul = e.target.closest('ul');
      ul.childNodes.forEach((el) => {
        el.childNodes.forEach((p: HTMLParagraphElement) => p?.classList?.remove('detailed'));
      });

      if (e.target.tagName === 'P') {
        e.target.classList.toggle('detailed');
      }
    });
  };

  // 로컬스토리지에서 메모 가져와서 렌더링
  const getSavedMemos = () => {
    if (localStorage.getItem('memo')) {
      memoList.innerHTML = JSON.parse(localStorage.getItem('memo'));
    }
  };

  // NEW 버튼 클릭하면 일어나는 이벤트
  const addNewMemo = () => {
    newMemoBtn.addEventListener('click', () => {
      memoList.childNodes.forEach((el: HTMLLIElement) => el?.classList?.remove('detailed'));
      memoInput.classList.toggle('hide');
      memoList.childNodes.forEach((li) => {
        li.childNodes.forEach((p: HTMLParagraphElement) => p?.classList?.remove('detailed'));
      });
    });
  };

  // 새 메모 입력 후 엔터 누르면 일어나는 이벤트
  const finishMemoInput = () => {
    memoInput.addEventListener('keyup', (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        const li = document.createElement('li');
        li.classList.add('memo__item');
        li.innerHTML = `<p class="memo__content"> ${memoInput.value} </p>`;

        memoInput.value = '';
        memoList.appendChild(li);

        localStorage.setItem('memo', JSON.stringify(memoList.innerHTML));
        memoInput.classList.toggle('hide');
      }
    });
  };

  onMemoClick();
  getSavedMemos();
  addNewMemo();
  finishMemoInput();
};

export default memo;
