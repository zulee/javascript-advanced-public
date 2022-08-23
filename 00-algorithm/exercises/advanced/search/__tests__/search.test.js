import linearSearch from '../solution/js/search';

describe('linearSearch ', () => {
  test('should return true if the array contains the element', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const value = 1;

    const result = linearSearch(arr1, value);

    expect(result).toBe(true);
  });

  test('should return false if the array does not contain the element', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const value = 10;

    const result = linearSearch(arr1, value);

    expect(result).toBe(false);
  });
});
