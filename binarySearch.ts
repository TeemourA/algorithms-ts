const binarySearch = (list: number[], item: number) => {
  let low = 0; // lower bound index
  let high = list.length - 1; // upper bound index

  while (low <= high) {
    console.log('inside loop');
    let mid = Math.floor((low + high) / 2); // middle index
    let guess = list[mid]; // current element on middle index
    // console.log(`-----`);
    // console.log(`low: ${low}`);
    // console.log(`mid: ${mid}`);
    // console.log(`high: ${high}`);
    // console.log(`guess: ${guess} ? item: ${item}`);
    // console.log('-----');
    if (guess === item) {
      // if guess === searched item -> return it's index
      return mid;
    } else if (guess > item) {
      // if guess > searched item -> decrease upper bound by 1
      high = mid - 1;
    } else if (guess < item) {
      // if guess < searched item -> increase lower bound by 1
      low = mid + 1;
    } else {
      return;
    }
  }

  return null;
};

// const arr = [1, 3, 5, 7, 9, 12, 15, 16, 29, 31, 54, 66, 71, 89, 93];
