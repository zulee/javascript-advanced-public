import getUnionOfTwoArrays from '../solution/js/union';

describe('getUnionOfTwoArrays ', () => {
  test('should return the union of two arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 4, 5];

    const result = getUnionOfTwoArrays(arr1, arr2);

    expect(result).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
  });

  test('should return empty array', () => {
    expect(getUnionOfTwoArrays([], [])).toEqual([]);
  });
});
