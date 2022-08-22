import { summation, subtraction } from '../solution/js/lib';

describe('summation() ', () => {
  test('sholud return the sum of two number', () => {
    expect(summation(1, 2)).toBe(3);
  });

  test('should return the parameter value if only one parameter added', () => {
    expect(summation(10)).toBe(10);
  });

  test('should return 0 if no parameters added', () => {
    expect(summation()).toBe(0);
  });
});

describe('subtraction() ', () => {
  test('sholud return the sum of two number', () => {
    expect(subtraction(10, 1)).toBe(9);
  });

  test('should return the parameter value if only one parameter added', () => {
    expect(subtraction(10)).toBe(10);
  });

  test('should return 0 if no parameters added', () => {
    expect(subtraction()).toBe(0);
  });
});
