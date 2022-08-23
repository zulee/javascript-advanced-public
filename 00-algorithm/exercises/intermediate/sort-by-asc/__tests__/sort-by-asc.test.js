import sortByAsc from '../solution/js/sort-by-asc';

describe('sortByAsc ', () => {
  test('should return the sorted array by asc', () => {
    const arr = [1, 2, 4, 5, 3];

    const result = sortByAsc(arr);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
