const sum = (arr: number[]): any => {
  if (arr.length === 0) {
    return 0;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  const [firstNumber, ...restNumbers] = arr;

  return firstNumber + sum(restNumbers);
};
