const findSmallest = (arr: number[]) => {
  const smallestIndex = arr.reduce(
    (smallestIndex, element, currentIndex) =>
      element < arr[smallestIndex] ? currentIndex : smallestIndex,
    0
  );

  return smallestIndex;
};

const selectionSort = (_arr: number[]) => {
  const sortedArray = [];
  let arr = [..._arr];
  let smallestIndex: number;

  for (let i = 0; i < _arr.length; i += 1) {
    smallestIndex = findSmallest(arr);
    sortedArray.push(arr.splice(smallestIndex, 1)[0]);
  }

  return sortedArray;
};
