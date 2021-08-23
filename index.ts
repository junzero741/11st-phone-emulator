require('./src/css/index.css');

import HomeView from './src/ts/views/HomeView';
import AlarmView from './src/ts/views/AlarmView';
import MemoView from './src/ts/views/MemoView';
import PhotoView from './src/ts/views/PhotoView';

import dnd from './src/ts/models/dnd';
import alarm from './src/ts/models/alarm';
import memo from './src/ts/models/memo';
import photo from './src/ts/models/photo';

import getDate from './src/ts/utils/getDate';
import checkAlarm from './src/ts/utils/checkAlarm';

let timer;
let alarmChecker;

const router = async () => {
  clearInterval(timer);
  clearInterval(alarmChecker);
  const routes = [
    { path: '/', view: HomeView },
    { path: '/alarms', view: AlarmView },
    { path: '/memos', view: MemoView },
    { path: '/photos', view: PhotoView },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });
  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  // 없는 url 입력할 시 홈화면으로 이동
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new match.route.view(); // 라우트에 맞는 뷰 지정
  document.querySelector('#app').innerHTML = view.getHtml(); // 지정된 뷰를 app에 렌더링

  // 페이지별 모델 분리
  try {
    distributeModel(location.pathname);
  } catch (error) {
    console.error(error);
  }

  // 모든 페이지에 시계 렌더링
  const renderClock = () => {
    document.querySelector('.clock').innerHTML = getDate();
  };
  renderClock();

  // 1초마다 실행되는 알람체커와 시계
  alarmChecker = setInterval(checkAlarm, 1000);
  timer = setInterval(renderClock, 1000);
};

window.addEventListener('popstate', router); // 뒤로가기

// 페이지 init 및 라우터 이벤트 부착
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e: any) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});

// 페이지 이동 함수
const navigateTo = (url) => {
  history.pushState(null, null, url);
  clearInterval(timer);
  clearInterval(alarmChecker);
  router();
};

// 페이지별 모델 분리
const distributeModel = (pathname) => {
  switch (pathname) {
    case '/':
      dnd();
      break;
    case '/memos':
      memo();
      break;
    case '/alarms':
      alarm();
      break;
    case '/photos':
      photo();
      break;
    default:
      throw Error(`unhandled pathname : ${pathname}`);
  }
};
