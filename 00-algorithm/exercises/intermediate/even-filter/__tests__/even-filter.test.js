import getTheEvenElements from '../solution/js/even-filter';

describe('getTheEvenElements ', () => {
  test('should return the even elements of an array', () => {
    const arr = [1, 2, 3, 4, 5];

    const result = getTheEvenElements(arr);

    expect(result).toEqual([2, 4]);
  });
});
