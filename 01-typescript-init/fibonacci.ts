/*

    0, 1, 1, 2, 3,5,8

*/
export const fib = (n: number): number => {
  // Condicion de corte o de control
  // O(2^n)
  // O(2^50)
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

// Memoization
// {clave: valor}
// 3 -> 2
// 5 -> 5
type MemoObject = Record<number, number>;
const memoizedFib = (n: number, memo: MemoObject = {}) => {
  /*
        {
            3: 2,
            4: 3,
            5: 5
        }
    */
   /*
        O(2^n) -> O(n)
        S: O(n)
        // O(n + n + 2n) -> O(4n) -> O(n)
   */
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo);
  return memo[n];
};

console.time("FIB");
memoizedFib(50);
console.timeEnd("FIB");
