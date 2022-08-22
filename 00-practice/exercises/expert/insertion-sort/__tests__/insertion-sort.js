import insertionSort from '../solution/js/insertion-sort';

describe('insertionSort ', () => {
  test('should return a sorted array with the new element', () => {
    const arr = [1, 10, 100, 1000, 10000];
    global.prompt = () => '20';

    const result = insertionSort(arr);

    expect(result).toEqual([1, 10, 20, 100, 1000, 10000]);
  });

  test('should return a sorted array with the new element of the end if the number is larger than other element', () => {
    const arr = [1, 10, 100, 1000, 10000];
    global.prompt = () => '100000';

    const result = insertionSort(arr);

    expect(result).toEqual([1, 10, 100, 1000, 10000, 100000]);
  });
});
