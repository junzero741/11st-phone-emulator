require('./src/css/index.css');

import HomeView from './src/ts/views/HomeView';
import AlarmView from './src/ts/views/AlarmView';
import MemoView from './src/ts/views/MemoView';
import PhotoView from './src/ts/views/PhotoView';
import getDate from './src/ts/utils/getDate';

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
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
  const clockRender = () => {
    document.querySelector('.clock').innerHTML = getDate();
  };

  // 시계 렌더링
  clockRender();
  setInterval(clockRender, 1000);
};

// 뒤로가기
window.addEventListener('popstate', router);

// 라우트 이동 이벤트 위임
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e: any) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
