function* fibonacci() {
  let a = 1;
  yield a;
  let b = 1;
  yield b;
  while (true) {
    [a, b] = [b, a + b];
    yield b;
  }
}

const fibonacciIterator = fibonacci();

const fibonacciExponential = () => {
  const { value } = fibonacciIterator.next();
  return value * value;
};

export default fibonacciExponential;
