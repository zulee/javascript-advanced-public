import powersOfTwo from '../solution/js/fibonacciExponential';

describe('fibonacciExponential() ', () => {
  test('should exponential values of fibonacci', () => {
    const expecteds = [1, 1, 4, 9, 25];

    expecteds.forEach((expected) => {
      expect(powersOfTwo()).toBe(expected);
    });
  });
});
