const grid = (m: number, n: number): number => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return grid(m - 1, n) + grid(m, n - 1);
};
