import powersOfTwo from '../solution/js/powersOfTwo';

describe('powersOfTwo() ', () => {
  test('should return 2, 4, 8, 16,', () => {
    const indexIterator = powersOfTwo();
    const expecteds = [2, 4, 8, 16];

    expecteds.forEach((expected) => {
      expect(indexIterator.next().value).toBe(expected);
    });
  });
});
