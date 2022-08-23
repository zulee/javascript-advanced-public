import getNthLargestElement from '../solution/js/nth-largest';

describe('getNthLargestElement ', () => {
  test('should return the nth largest element form az array', () => {
    const arr = [1, 2, 3, 4, 5];
    const nth = 2;

    const result = getNthLargestElement(arr, nth);

    expect(result).toBe(4);
  });

  test('should return null if array does not contains nth\'s element', () => {
    const arr = [1, 2, 3, 4, 5];
    const nth = 10;

    const result = getNthLargestElement(arr, nth);

    expect(result).toBeNull();
  });
});
