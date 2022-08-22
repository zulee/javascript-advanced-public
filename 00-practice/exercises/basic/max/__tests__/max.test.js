import getTheLargestElement from '../solution/js/max';

describe('getTheLargestElement ', () => {
  test('should return the largest element of an array', () => {
    const arr = [1, 2, 3, 4, 5];

    const result = getTheLargestElement(arr);

    expect(result).toBe(5);
  });

  test('should return undefined', () => {
    expect(getTheLargestElement([])).toBeUndefined();
  });
});
