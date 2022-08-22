import getOddEvenElements from '../solution/js/odd-filter';

describe('getOddEvenElements ', () => {
  test('should return the odd elements of an array', () => {
    const arr = [1, 2, 3, 4, 5];

    const result = getOddEvenElements(arr);

    expect(result).toEqual([1, 3, 5]);
  });
});
