import getCartesianProductOfTwoArrays from '../solution/js/descartes';

describe('getCartesianProductOfTwoArrays', () => {
  test('should return a product beetween two array', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 4, 5];

    const result = getCartesianProductOfTwoArrays(arr1, arr2);

    const expected = [
      [1, 3],
      [1, 4],
      [1, 5],
      [2, 3],
      [2, 4],
      [2, 5],
      [3, 3],
      [3, 4],
      [3, 5],
    ];

    expect(result).toEqual(expect.arrayContaining(expected));
  });

  test('should return an empty array', () => {
    expect(getCartesianProductOfTwoArrays([], [])).toEqual([]);
  });
});
