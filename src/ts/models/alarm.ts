import { HTMLElementEvent } from '../types';

const alarm = () => {
  const newAlarmBtn = document.querySelector('.new__alarm');
  const alarmForm = document.querySelector('.alarm__form');
  const alarmInputAmPm = <HTMLSelectElement>document.querySelector('.alarm__input__ampm');
  const alarmInputHours = <HTMLInputElement>document.querySelector('.alarm__input__hours');
  const alarmInputMinutes = <HTMLInputElement>document.querySelector('.alarm__input__minutes');
  const alarmList = <HTMLUListElement>document.querySelector('.alarm__list');

  // NEW 버튼 클릭하면 새 알람 추가하는 폼 보여주기
  const addNewAlarm = () => {
    try {
      newAlarmBtn.addEventListener('click', () => {
        alarmForm.classList.toggle('hide');
      });
    } catch (error) {
      console.error('alarm page is not rendered yet');
    }
  };

  // 로컬스토리지에 저장된 알람이 있으면 불러오기
  const getSavedAlarms = () => {
    if (localStorage.getItem('alarm')) {
      if (!alarmList) return;
      alarmList.innerHTML = JSON.parse(localStorage.getItem('alarm')); //error
    }
  };

  // 알람 작성이 끝나면 해당 알람과 기존 알람 리스트를 로컬스토리지에 저장
  const finishAlarmInput = () => {
    alarmForm?.addEventListener('submit', (e: MouseEvent) => {
      e.preventDefault();
      const ampm = alarmInputAmPm.options[alarmInputAmPm.selectedIndex].text;
      const hours = alarmInputHours.value;
      const minutes = alarmInputMinutes.value;

      const li = document.createElement('li');
      li.classList.add('alarm__item');
      li.innerHTML = `<div class ="alarm__item__content"><span class="alarm__item__content__time">${ampm} ${hours}시 ${minutes}분</span><button class="alarm__item__content__delete">삭제</button></div>`;

      alarmList.appendChild(li);
      saveCurrentAlarms();
      alarmForm.classList.add('hide');
    });
  };

  // 현재 알람 목록을 로컬스토리지에 저장하는 재활용 함수
  const saveCurrentAlarms = () => {
    localStorage.setItem('alarm', JSON.stringify(alarmList.innerHTML));
  };

  // 삭제버튼을 클릭하면 해당 알람 삭제
  const onDeleteAlarm = () => {
    alarmList?.addEventListener('click', (e: HTMLElementEvent<HTMLUListElement>) => {
      const deleteBtn = e.target.closest('button');
      const alarmItem = deleteBtn?.parentNode?.parentNode; // should be ul
      alarmItem?.parentNode.removeChild(alarmItem); // ul 에서 li 삭제
      saveCurrentAlarms();
    });
  };

  // 10분 단위 입력받는 칸의 값이 60이면 0으로 초기화
  const setAlarmMinuteValue = () => {
    const input: HTMLInputElement = document.querySelector('.alarm__input__minutes');
    input.addEventListener('change', () => {
      input.value = Number(input.value) > 50 ? '0' : input.value;
    });
  };

  getSavedAlarms();
  addNewAlarm();
  finishAlarmInput();
  onDeleteAlarm();
  setAlarmMinuteValue();
};

export default alarm;
