const temporarySumTest = (a: number, b: number) => a + b;

test('Should return 3', () => {
  const sum = temporarySumTest(1, 2);
  expect(sum).toBe(3);
});
