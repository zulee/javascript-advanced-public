import { getSumOfTheElements, getAverageOfTheElements } from '../solution/js/sum-and-avg';

describe('getSumOfTheElements ', () => {
  test('should return the sum of the elements of an array', () => {
    const arr = [1, 2, 3, 4, 5];

    const result = getSumOfTheElements(arr);

    expect(result).toBe(15);
  });

  test('should return 0', () => {
    const arr = [-1, -2, 1, 2];

    const result = getSumOfTheElements(arr);

    expect(result).toBe(0);
  });
});

describe('getAverageOfTheElements ', () => {
  test('should return avarage of the elements of an array', () => {
    const arr = [1, 2, 3, 4, 5];

    const result = getAverageOfTheElements(arr);

    expect(result).toBe(3);
  });

  test('should return 0', () => {
    const arr = [0, -1, -2, 1, 2];

    const result = getAverageOfTheElements(arr);

    expect(result).toBe(0);
  });
});
