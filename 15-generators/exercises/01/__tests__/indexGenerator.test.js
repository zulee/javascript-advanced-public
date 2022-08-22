import indexGenerator from '../solution/js/indexGenerator';

describe('indexGenerator() ', () => {
  test('should return 1, 2, 3', () => {
    const indexIterator = indexGenerator();
    const expexted = [1, 2, 3];

    expexted.forEach((value) => {
      expect(indexIterator.next().value).toBe(value);
    });
  });
});
