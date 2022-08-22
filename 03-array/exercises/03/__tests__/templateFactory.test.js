import templateFactory from '../solution/js/templateFactory';

const normalizeStr = (str) => str
  .replace(/\s+/g, '')
  .replace(/ {2,}/g, ' ')
  .replace(/> </g, '><')
  .trim();

describe('Arrays module excercises ', () => {
  test('templateFactory should return an tree items unordered list html template', () => {
    const arr = ['first', 'second', 'third'];

    const result = templateFactory(arr);

    expect(normalizeStr(result)).toBe('<ul><li>first</li><li>second</li><li>third</li></ul>');
  });

  test('templateFactory should return a single item unordered list html template', () => {
    const arr = ['a'];

    const result = templateFactory(arr);

    expect(normalizeStr(result)).toBe('<ul><li>a</li></ul>');
  });
});
