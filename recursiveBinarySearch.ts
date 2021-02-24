const recursiveBinarySearch = (arr: number[], target: number): boolean => {
  if (arr.length === 0) {
    return false;
  }

  if (arr.length === 1) {
    return arr[0] === target;
  }

  const low = 0;
  const high = arr.length - 1;
  const mid = Math.floor((low + high) / 2);
  const guess = arr[mid];

  if (guess === target) {
    return true;
  } else if (guess < target) {
    return recursiveBinarySearch(arr.slice(mid + 1, arr.length), target);
  } else {
    return recursiveBinarySearch(arr.slice(low, mid), target);
  }
};
