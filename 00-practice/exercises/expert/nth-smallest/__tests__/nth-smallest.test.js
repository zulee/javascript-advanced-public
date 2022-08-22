import getNthSmallestElement from '../solution/js/nth-smallest';

describe('getNthSmallestElement ', () => {
  test('gshould return the nth smallest element form az array', () => {
    const arr = [1, 2, 3, 4, 5];
    const nth = 2;

    const result = getNthSmallestElement(arr, nth);

    expect(result).toBe(2);
  });

  test('should return null if array does not contains nth\'s element', () => {
    const arr = [1, 2, 3, 4, 5];
    const nth = 2;

    const result = getNthSmallestElement(arr, nth);

    expect(result).toBe(2);
  });
});
