const getDate = (): string => {
  let result = '';
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  result += `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes < 10 ? '0' + minutes : minutes}분 ${
    seconds < 10 ? '0' + seconds : seconds
  }초`;
  return result;
};

export default getDate;
