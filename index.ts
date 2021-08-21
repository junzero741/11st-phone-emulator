require('./src/css/index.css');

import HomeView from './src/ts/views/HomeView';
import AlarmView from './src/ts/views/AlarmView';
import MemoView from './src/ts/views/MemoView';
import PhotoView from './src/ts/views/PhotoView';

import dnd from './src/ts/models/dnd';
import memo from './src/ts/models/memo';
import alarm from './src/ts/models/alarm';

import getDate from './src/ts/utils/getDate';

const navigateTo = (url) => {
  history.pushState(null, null, url);
  clearInterval(timer);
  router();
};

let timer;

const router = async () => {
  clearInterval(timer);
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

  const view = new match.route.view();

  // app 에 html 렌더링
  document.querySelector('#app').innerHTML = view.getHtml();

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
  timer = setInterval(renderClock, 1000);
};

// 뒤로가기
window.addEventListener('popstate', router);

// 페이지 init
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e: any) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});

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
    default:
      throw Error(`unhandled pathname : ${pathname}`);
  }
};
