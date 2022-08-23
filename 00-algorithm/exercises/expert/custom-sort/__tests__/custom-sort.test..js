import customSort from '../solution/js/custom-sort';

describe('customSort ', () => {
  test('should return the sorted array by numbers, and put other elements to the end of the array', () => {
    const arr = ['dsf', 34, 6, 343, true, null, 878];

    const result = customSort(arr);

    expect(result).toEqual([6, 34, 343, 878, 'dsf', true, null]);
  });
});
