import getSectionOfTwoArrays from '../solution/js/section';

describe('getSectionOfTwoArrays ', () => {
  test('should return the section of two arrays', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [3, 4, 5, 6, 7];

    const result = getSectionOfTwoArrays(arr1, arr2);

    expect(result).toEqual(expect.arrayContaining([3, 4, 5]));
  });

  test('should return an empty array', () => {
    const arr1 = [];
    const arr2 = [];

    const result = getSectionOfTwoArrays(arr1, arr2);

    expect(result).toEqual([]);
  });
});
