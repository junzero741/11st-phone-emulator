import { cutStringFromTime } from '../ts/utils/checkAlarm';

test('한자릿수 시간(ex: 5시) 에서 문자를 제거하면 5이 될 것', () => {
  expect(cutStringFromTime('5시')).toBe(5);
});

test('두자릿수 시간(ex: 10시) 에서 문자를 제거하면 10이 될 것', () => {
  expect(cutStringFromTime('10시')).toBe(10);
});

test('한자릿수 분(ex: 5분) 에서 문자를 제거하면 5이 될 것', () => {
  expect(cutStringFromTime('5분')).toBe(5);
});

test('두자릿수 분(ex: 27분) 에서 문자를 제거하면 27이 될 것', () => {
  expect(cutStringFromTime('27분')).toBe(27);
});
