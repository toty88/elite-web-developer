const transformNumbers = (nums: number[]): number[] => {
    return nums.map((num) => num * 2)
}

const sumNumbers = (nums: number[]): void => {
    console.log('sumar numeros y no retornar nada')
    return undefined
}

const sumAndReturnNumbers = (nums: number[], message?: string): string => {
    const total: number =  nums.reduce((prev = 0, next) => prev + next)
    return `${message} ${total}`
}


sumAndReturnNumbers([1,2,3,4,5]) // undefined 15