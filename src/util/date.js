export const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
  //toISOString()메서드는 YYYY-MM-DDTHH:mm.ss.sssZ의 문자열을 반환한다
  // 0부터 9까지 slice로 자르면 년도월일까지의 값이 반환된다.
};
