export function binarySearch<TItem, TValue>(
  array: TItem[],
  lookFor: TValue,
  compareFunc: (at: TItem, lookFor: TValue) => number
) {
  var lowerBound = 0;
  var upperBound = array.length - 1;
  while (lowerBound <= upperBound) {
    // This is the same as Math.floor((upperbound + lowerbound) / 2);
    var checkIndex = (upperBound + lowerBound) >> 1;
    var result = compareFunc(array[checkIndex], lookFor);
    if (result > 0) {
      lowerBound = checkIndex + 1;
    } else if (result < 0) {
      upperBound = checkIndex - 1;
    } else {
      return checkIndex;
    }
  }
  return -lowerBound - 1;
}
