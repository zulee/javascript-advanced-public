import numberAndStringSorter from '../solution/js/number-string-sorter';

describe('numberAndStringSorter ', () => {
  test('sort numbers and strings', () => {
    const arr = [1, 2, 3, 'a', 'b', 'c'];

    const result = numberAndStringSorter(arr);

    expect(result).toEqual([1, 'a', 2, 'b', 3, 'c']);
  });
});
