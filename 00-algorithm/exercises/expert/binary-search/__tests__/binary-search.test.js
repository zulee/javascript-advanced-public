import binarySearch from '../solution/js/binary-search';

describe('binarySearch ', () => {
  test('should return true if the array contains the element', () => {
    const arr = [1, 2, 3, 4, 5];
    const searchValue = 1;

    const result = binarySearch(arr, searchValue);

    expect(result).toEqual(true);
  });

  test('should return false if the array does not contain the element', () => {
    const arr = [1, 2, 3, 4, 5];
    const searchValue = 10;

    const result = binarySearch(arr, searchValue);

    expect(result).toEqual(false);
  });
});
