import alarm from '../models/alarm';

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
      const alarmOff = confirm('알람!');

      if (alarmOff) {
        const li = el.parentNode.parentNode;
        ul.removeChild(li);
        localStorage.setItem('alarm', JSON.stringify(ul.innerHTML));
        alarm();
      }
    }
  });
};

const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return [hours, minutes, seconds];
};

const parseTime = (str) => {
  const tokens = str.split(' ');
  const ampm = tokens[0];
  let hours = cutStringFromTime(tokens[1]);
  let minutes = cutStringFromTime(tokens[2]);
  if (ampm === '오후') hours += 12;
  return [hours, minutes];
};

const cutStringFromTime = (time: string) => {
  const tempArray = Array.from(time);
  tempArray.pop();
  const result = tempArray.join('');
  return Number(result);
};

export default checkAlarm;
