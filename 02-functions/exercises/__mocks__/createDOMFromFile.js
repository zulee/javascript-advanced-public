// eslint-disable-next-line import/no-extraneous-dependencies
import { JSDOM } from 'jsdom';
import { join } from 'path';
import __dirname from './dirname';

const createDOMFromFile = async (path) => {
  const dom = await JSDOM.fromFile(join(__dirname, path), {
    resources: 'usable',
    runScripts: 'dangerously',
  });
  await new Promise((resolve) => dom.window.addEventListener('load', resolve));
  return dom;
};

export default createDOMFromFile;
