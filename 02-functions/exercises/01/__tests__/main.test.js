// eslint-disable-next-line import/no-extraneous-dependencies
import { jest } from '@jest/globals';
import createDOMFromFile from '../../__mocks__/createDOMFromFile';
/* eslint-disable no-underscore-dangle */

let buttons;
let dom;
const buttonTexts = ['Első', 'Második', 'Harmadik'];

describe('page ', () => {
  beforeEach(async () => {
    dom = await createDOMFromFile('../01/solution/index.html');
    buttons = dom.window.document.querySelectorAll('button');
  });

  test('should contain three buttons', () => {
    expect(buttons.length).toBe(3);
  });

  describe('buttons ', () => {
    test('should have class: button', () => {
      buttons.forEach((button) =>
        expect(button.classList.contains('button')).toBeTruthy());
    });

    test('should have text contents: "Első", "Második", "Harmadik"', () => {
      buttons.forEach((button, index) =>
        expect(button.textContent).toBe(buttonTexts[index]));
    });

    test('should write the buttons text content to the console when click event occured', () => {
      const spyConsole = jest.spyOn(console, 'log').mockImplementation();

      buttons.forEach((button, index) => {
        button.click();
        expect(spyConsole.mock.calls[index][0]).toBe(buttonTexts[index]);
      });
    });
  });
});
