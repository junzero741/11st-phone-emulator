import alarm from '../models/alarm';

// 로컬스토리지의 알람 확인
const checkAlarm = () => {
  if (!localStorage.getItem('alarm')) return;
  const alarmData = localStorage.getItem('alarm');
  const ul = document.createElement('ul');
  ul.innerHTML = JSON.parse(alarmData);
  const timeList = ul.querySelectorAll('.alarm__item__content__time');

  const [hours, minutes, seconds] = getCurrentTime();

  timeList.forEach((el: HTMLSpanElement) => {
    const [alarmHour, alarmMinutes] = parseTime(el.innerText);
    if (alarmHour === hours && alarmMinutes === minutes && seconds === 0) {
      fireAlarm(ul, el);
    }
  });
};

// 알람 팝업
const fireAlarm = (ul: HTMLUListElement, el: HTMLSpanElement) => {
  const li = el.parentNode.parentNode;
  const alarmOff = confirm('알람!');
  if (alarmOff) {
    ul.removeChild(li);
    localStorage.setItem('alarm', JSON.stringify(ul.innerHTML));
    alarm();
  }
};

// 현재 시간
const getCurrentTime = (): number[] => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return [hours, minutes, seconds];
};

// 문자열에서 시간/분 데이터만 추출
export const parseTime = (time: string): number[] => {
  const tokens = time.split(' ');
  const ampm = tokens[0];
  let hours = cutStringFromTime(tokens[1]);
  let minutes = cutStringFromTime(tokens[2]);
  if (ampm === '오후' && hours !== 12) hours += 12;
  return [hours, minutes];
};

// 시간문자열에서 "시", "분" 문자 제거
export const cutStringFromTime = (time: string): number => {
  const tempArray = Array.from(time);
  tempArray.pop();
  const result = tempArray.join('');
  return Number(result);
};

export default checkAlarm;
