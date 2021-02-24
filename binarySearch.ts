const binarySearch = (list: number[], item: number) => {
  let lowerBound = 0;
  let upperBound = list.length - 1;

  while (lowerBound <= upperBound) {
    let middle = Math.floor((lowerBound + upperBound) / 2);
    let guess = list[middle];

    if (guess === item) {
      return middle;
    } else if (guess > item) {
      upperBound = middle - 1;
    } else if (guess < item) {
      lowerBound = middle + 1;
    } else {
      return;
    }
  }

  return null;
};

const arr = [1, 3, 5, 7, 9, 12, 15, 16, 29, 31, 54, 66, 71, 89, 93];

console.log(binarySearch(arr, 89));
