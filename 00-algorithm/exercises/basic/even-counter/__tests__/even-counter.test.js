import getCountOfTheEvenElements from '../solution/js/even-counter';

describe('getCountOfTheEvenElements ', () => {
  test('should return the count of even elements of an array', () => {
    const arr = [1, 2, 3, 4, 5];

    const result = getCountOfTheEvenElements(arr);

    expect(result).toBe(2);
  });

  test('should return the count of even elements of an array', () => {
    const arr = [1, 3, 5];

    const result = getCountOfTheEvenElements(arr);

    expect(result).toBe(0);
  });
});
