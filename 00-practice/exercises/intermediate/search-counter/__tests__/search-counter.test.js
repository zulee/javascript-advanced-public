import searchAndCount from '../solution/js/search-counter';

describe('searchAndCount ', () => {
  test('should return the count of searced element', () => {
    const arr = [1, 2, 3, 4, 5, 2, 2];
    const searchValue = 2;

    const result = searchAndCount(arr, searchValue);

    expect(result).toBe(3);
  });
});
