const canSum = (x: number, arr: number[]): boolean => {
    for (let i = 0; i < (arr.length - 1); i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === x) return true;
        }
    }
    return false;
}

console.log(canSum(10, [5, 1, 3, 5]));
