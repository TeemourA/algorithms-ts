const quickSort = <T>(arr: T[]): T[] => {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[Math.floor(Math.random() * arr.length)];
  const less = arr.filter(el => el < pivot);
  const greater = arr.filter(el => el > pivot);

  return [...quickSort(less), pivot, ...quickSort(greater)];
};
