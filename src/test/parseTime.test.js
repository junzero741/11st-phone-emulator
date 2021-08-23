import { parseTime } from '../ts/utils/checkAlarm';

test('문자열 "오후 8시 40분" 를 파싱하면 [20, 40]이 되어야 한다.', () => {
  expect(parseTime('오후 8시 40분')).toEqual([20, 40]);
});

test('문자열 "오후 11시 2분" 를 파싱하면 [23, 2]이 되어야 한다.', () => {
  expect(parseTime('오후 11시 2분')).toEqual([23, 2]);
});

test('문자열 "오전 11시 49분" 를 파싱하면 [11, 49]이 되어야 한다.', () => {
  expect(parseTime('오전 11시 49분')).toEqual([11, 49]);
});

test('문자열 "오전 0시 0분" 를 파싱하면 [0, 0]이 되어야 한다.', () => {
  expect(parseTime('오전 0시 0분')).toEqual([0, 0]);
});
