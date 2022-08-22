import getTheDifferenceBetweenTwoArrays from '../solution/js/difference';

describe('getTheDifferenceBetweenTwoArrayss ', () => {
  test('should return the difference between two arrays', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [3, 4, 5, 6, 7];

    const result = getTheDifferenceBetweenTwoArrays(arr1, arr2);

    expect(result).toEqual(expect.arrayContaining([1, 2]));
  });

  test('should return an empty array, if the arrays are same', () => {
    expect(getTheDifferenceBetweenTwoArrays([], [])).toEqual([]);
  });
});
