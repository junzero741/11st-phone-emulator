import { HTMLElementEvent } from '../types';

const alarm = () => {
  const newAlarmBtn = document.querySelector('.new__alarm');
  const alarmForm = document.querySelector('.alarm__form');
  const alarmInputAmPm = <HTMLSelectElement>document.querySelector('.alarm__input__ampm');
  const alarmInputHours = <HTMLInputElement>document.querySelector('.alarm__input__hours');
  const alarmInputMinutes = <HTMLInputElement>document.querySelector('.alarm__input__minutes');
  const alarmList = document.querySelector('.alarm__list');

  const addNewAlarm = () => {
    newAlarmBtn.addEventListener('click', () => {
      alarmForm.classList.toggle('hide');
    });
  };

  const getSavedAlarms = () => {
    if (localStorage.getItem('alarm')) {
      alarmList.innerHTML = JSON.parse(localStorage.getItem('alarm'));
    }
  };

  const finishAlarmInput = () => {
    alarmForm.addEventListener('submit', (e: MouseEvent) => {
      e.preventDefault();
      const ampm = alarmInputAmPm.options[alarmInputAmPm.selectedIndex].text;
      const hours = alarmInputHours.value;
      const minutes = alarmInputMinutes.value;

      const li = document.createElement('li');
      li.classList.add('alarm__item');
      li.innerHTML = `<div class ="alarm__item__content"><span class="alarm__item__content__time">${ampm} ${hours}시 ${minutes}분</span><button class="alarm__item__content__delete">삭제</button></div>`;

      alarmList.appendChild(li);
      // console.log('inside ul:', alarmList.innerHTML);
      saveCurrentAlarms();
      alarmForm.classList.add('hide');
    });
  };

  const saveCurrentAlarms = () => {
    alarmList.childNodes.forEach((el: HTMLElement) => {
      if (el.innerText) console.log(el);
    });
    localStorage.setItem('alarm', JSON.stringify(alarmList.innerHTML));
  };

  const deleteAlarm = () => {
    alarmList.addEventListener('click', (e: HTMLElementEvent<HTMLUListElement>) => {
      const deleteBtn = e.target.closest('button');
      const alarmItem = deleteBtn.parentNode.parentNode;
      alarmItem.parentNode.removeChild(alarmItem);
      console.log('inside ul:', alarmList.innerHTML);
      saveCurrentAlarms();
    });
  };

  getSavedAlarms();
  addNewAlarm();
  finishAlarmInput();
  deleteAlarm();
};

export default alarm;
