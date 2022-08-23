import getTheSmallestElement from '../solution/js/min';

describe('getTheSmallestElement ', () => {
  test('should return the smallest element of an array', () => {
    const arr = [1, 2, 3, 4, 5];

    const result = getTheSmallestElement(arr);

    expect(result).toBe(1);
  });

  test('should return undefined', () => {
    expect(getTheSmallestElement([])).toBeUndefined();
  });
});
