import sumNetPrices from '../solution/js/sumNetPrices';

describe('sumNetPrices() ', () => {
  test('should return the sum of values incremented by 27%', () => {
    const prices = [100, 200, 300];

    const result = sumNetPrices(prices);

    expect(result).toBe(762);
  });

  test('should return closed to the sum of values incremented by 27%', () => {
    const prices = [11, 22, 44];

    const result = sumNetPrices(prices);

    expect(result).toBeCloseTo(97.79);
  });
});
