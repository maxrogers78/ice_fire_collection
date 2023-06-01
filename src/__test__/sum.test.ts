const sum = (a: number, b: number) => a + b;

test('Should sum 3', () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
