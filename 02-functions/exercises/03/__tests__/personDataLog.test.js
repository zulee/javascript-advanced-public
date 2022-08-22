import personDataLog from '../solution/js/personDataLog';

describe('personDataLog() should return a string represents a user ', () => {
  test('witch contains firstName, lastName and age', () => {
    const person = {
      firstName: 'Jane',
      lastName: 'DoeDoe',
      age: 20,
    };

    const result = personDataLog(person);

    expect(result).toBe('My name is Jane DoeDoe. I\'m 20 years old.');
  });

  test('if firstName is missing, the default value is: John', () => {
    const person = {
      lastName: 'Doe',
      age: 20,
    };

    const result = personDataLog(person);

    expect(result).toBe('My name is John Doe. I\'m 20 years old.');
  });

  test('if lastName is missing, the default value is: Doe', () => {
    const person = {
      firstName: 'Jane',
      age: 20,
    };

    const result = personDataLog(person);

    expect(result).toBe('My name is Jane Doe. I\'m 20 years old.');
  });

  test('if age is missing, the default value is: 33', () => {
    const person = {
      firstName: 'Jane',
      lastName: 'DoeDoe',
    };

    const result = personDataLog(person);

    expect(result).toBe('My name is Jane DoeDoe. I\'m 33 years old.');
  });

  test('if parameter is missing, the default values are: firstName = John, lastName = Doe , age = 33', () => {
    expect(personDataLog()).toBe('My name is John Doe. I\'m 33 years old.');
  });
});
