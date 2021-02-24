const findMax = (arr: number[]) => {
  const firstNum = arr[0];
  const secondNum = arr[1];

  if (arr.length === 1) {
    return firstNum;
  }

  if (arr.length === 2) {
    return firstNum > secondNum ? firstNum : secondNum;
  }

  const currentMax: number = findMax(arr.slice(1));
  return firstNum > currentMax ? firstNum : currentMax;
};
