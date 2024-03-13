/*
    Generico:
    - Valor a definir (puede ser cualquiera) 
    - Comodin
*/

// Estructura de los genericos
// Funcion
export const awesomeFn = <T>(arg: T): T => {
  return arg;
};

function awesomeFn2<T>(arg: T): T {
  return arg;
}
// Interfaz

interface Resource<T> {
  id: MaybeId;
  data: T;
}

////////// Examples

export const print = <T>(arg: T): T => {
  return arg;
};

function print2<T>(arg: T) {
  return arg;
}

export const print3 = (arg: any): any => {
  return arg;
};

print<number>(100.230123).toFixed(2);
print2<string>("FRANCO").toLocaleString;
print2(2).toFixed();
print3(3).toFixed();

// una función para concatenar 2 arrays
// [1,2,3] : T
// ["fran"]: U
// [1,2,3,"fran"]: (T | U)[]
export const concatArrays = <T, U>(arr1: T[], arr2: U[]): (T | U)[] => {
  return [...arr1, ...arr2];
};
concatArrays([1, 2, 3], ["franco"]);
//

type MaybeId = string | number | undefined;

interface Resource<T> {
  id: MaybeId;
  data: T;
}

interface User {
  name: string;
  age: number;
}

interface Product {
  name: string;
  price: number;
  quantity: number;
}

const productResource: Resource<Product> = {
  id: 1,
  data: {
    name: "Coca cola",
    price: 1100,
    quantity: 20,
  },
};

const userResource: Resource<User> = {
  id: "123",
  data: {
    name: "franquito",
    age: 29,
  },
};

export const map = <T>(array:T[], fn: (element: T) => T): T[] => {
  return array.map(fn);
};

const numbers = [1, 2, 3];
const duplicatedNumbers = map<number>(numbers, (x) => x * 2);

console.log('duplicatedNumbers', duplicatedNumbers)

// [1,2,3,2] -> [1,2,3]
// ['FRANCO','FRANCO'] -> 'FRANCO'
export const getUniqueItems = <T>(list:T[]): T[] => {
  return Array.from(new Set(list))
}

console.log(getUniqueItems<string>(['franco','franco']))